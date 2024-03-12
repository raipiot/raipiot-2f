import type { TenantVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

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
    columns: createColumns<TenantVo>([
      {
        title: t('ID'),
        dataIndex: 'tenantId',
        custom: { type: 'string' }
      },
      {
        title: t('NAME'),
        dataIndex: 'tenantName',
        custom: { type: 'string' }
      },
      {
        title: t('CONTACT'),
        dataIndex: 'linkman',
        custom: { type: 'string' }
      },
      {
        title: t('PHONE'),
        dataIndex: 'contactNumber',
        custom: { type: 'string' }
      },
      {
        title: t('ACCOUNT.LIMIT'),
        dataIndex: 'accountNumber',
        custom: { type: 'string' }
      },
      {
        title: t('EXPIRE.TIME'),
        dataIndex: 'expireTime',
        custom: { type: 'string' }
      },
      {
        title: t('DOMAIN'),
        dataIndex: 'domainUrl',
        custom: { type: 'string' }
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
