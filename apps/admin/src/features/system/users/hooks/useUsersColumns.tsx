import type { UserVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { useBaseModalContext, usePlatformModalContext } from '../context'
import { useUserRemoveMutation } from '../mutations'
import { userQueryOptions } from '../queries'

export const useUsersColumns = () => {
  const { modal, form } = useBaseModalContext()
  const { modal: platformModal, form: platformForm } = usePlatformModalContext()

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
        width: 150,
        custom: { type: 'tagString' }
      },
      {
        title: t('NAME'),
        dataIndex: 'realName',
        width: 150,
        custom: { type: 'string' }
      },
      {
        title: t('ROLE'),
        dataIndex: 'roleName',
        width: 200,
        custom: { type: 'string' },
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('DEPT'),
        dataIndex: 'deptName',
        width: 200,
        custom: { type: 'string' },
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('POSITION'),
        dataIndex: 'postName',
        width: 200,
        custom: { type: 'string' },
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('PLATFORM'),
        dataIndex: 'userTypeName',
        custom: { type: 'tagString' }
      },
      createActions({
        width: 250,
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
            <RpButton
              variant="config"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(userQueryOptions(record.id!))}
              onClick={async () => {
                platformModal?.openEdit()
                platformModal?.setMeta(record.id)
                platformForm?.setFieldsValue(
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
