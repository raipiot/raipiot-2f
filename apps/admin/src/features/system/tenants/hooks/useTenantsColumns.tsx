import type { TenantVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { AccountLimit, ExpireTime } from '../components'
import { useTenantRemoveMutation } from '../mutations'
import { tenantQueryOptions } from '../queries'

interface UseTenantsColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useTenantsColumns = (props?: UseTenantsColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/TENANTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<TenantVo>()

  const { mutateAsync, isPending } = useTenantRemoveMutation()

  return {
    columns: createColumns([
      {
        title: t('ID'),
        dataIndex: 'tenantId'
      },
      {
        title: t('NAME'),
        dataIndex: 'tenantName'
      },
      {
        title: t('CONTACT'),
        dataIndex: 'linkman'
      },
      {
        title: t('PHONE'),
        dataIndex: 'contactNumber'
      },
      {
        title: t('ACCOUNT.LIMIT'),
        dataIndex: 'accountNumber',
        render: (value) => <AccountLimit value={value} />
      },
      {
        title: t('EXPIRE.TIME'),
        dataIndex: 'expireTime',
        render: (value) => <ExpireTime value={value} />
      },
      {
        title: t('DOMAIN'),
        dataIndex: 'domainUrl'
      },
      createActions({
        width: 200,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(tenantQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(tenantQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(tenantQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(tenantQueryOptions(record.id!))
                )
              }}
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => mutateAsync(record.id!)}
            >
              <RpButton
                variant="delete"
                size="small"
              />
            </RpDeletePopconfirm>
          </ASpace>
        )
      })
    ])
  }
}
