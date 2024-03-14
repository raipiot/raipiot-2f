import type { UserVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { useUserRemoveMutation } from '../mutations'
import { userQueryOptions } from '../queries'

interface UseUsersColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useUsersColumns = (props?: UseUsersColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/USERS'])
  const { createActions, createColumns } = useTableCreator<UserVo>()

  const { mutateAsync, isPending } = useUserRemoveMutation()

  return {
    columns: createColumns<UserVo>([
      {
        title: t('LOGIN.ACCOUNT'),
        dataIndex: 'account',
        custom: { type: 'string' }
      },
      {
        title: t('TENANT'),
        dataIndex: 'tenantName',
        width: 80,
        custom: { type: 'tagString' }
      },
      {
        title: t('NAME'),
        dataIndex: 'realName',
        custom: { type: 'string' }
      },
      {
        title: t('ROLE'),
        dataIndex: 'roleName',
        custom: { type: 'string' }
      },
      {
        title: t('DEPT'),
        dataIndex: 'deptName',
        custom: { type: 'string' }
      },
      {
        title: t('POSITION'),
        dataIndex: 'postName',
        custom: { type: 'string' }
      },
      {
        title: t('PLATFORM'),
        dataIndex: 'userTypeName',
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
              onMouseEnter={() => queryClient.prefetchQuery(userQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(userQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(userQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(userQueryOptions(record.id!))
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
