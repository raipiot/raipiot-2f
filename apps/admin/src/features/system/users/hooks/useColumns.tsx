import type { UserVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { useBaseModalContext, usePlatformModalContext } from '../context'
import { useRemoveMutation } from '../mutations'
import { detailQueryOptions, platformDetailQueryOptions } from '../queries'

export const useColumns = () => {
  const baseModalContext = useBaseModalContext()
  const platformModalContext = usePlatformModalContext()

  const { t } = useTranslation('SYSTEM/USERS')
  const { createActions, createColumns } = useTableCreator<UserVo>()

  const { mutateAsync, isPending } = useRemoveMutation()

  return {
    columns: createColumns([
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
              onMouseEnter={() => queryClient.prefetchQuery(detailQueryOptions(record.id!))}
              onClick={async () => {
                const { modal, form } = baseModalContext
                modal.openRead()
                modal.setMeta(record.id)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(detailQueryOptions(record.id!))}
              onClick={async () => {
                const { modal, form } = baseModalContext
                modal.openEdit()
                modal.setMeta(record.id)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="config"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(platformDetailQueryOptions(record.id!))}
              onClick={async () => {
                const { modal, form } = platformModalContext
                modal.openEdit()
                modal.setMeta(record.id)
                const { userType, userExt } = await queryClient.ensureQueryData(
                  platformDetailQueryOptions(record.id!)
                )
                form.setFieldsValue({
                  userId: record.id!,
                  userType,
                  userExt
                })
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
