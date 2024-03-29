import type { RoleVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { tenantsQueryOptions } from '../../tenants'
import { useBaseModalContext } from '../context'
import { useRemoveMutation } from '../mutations'
import { detailQueryOptions } from '../queries'

export const useBaseColumns = () => {
  const { modal, form } = useBaseModalContext()
  const { t } = useTranslation(['SYSTEM/ROLES', 'COMMON', 'SYSTEM/DEPTS'])
  const { createActions, createColumns } = useTableCreator<RoleVo>()

  const { mutateAsync, isPending } = useRemoveMutation()
  const {
    data: { records }
  } = useSuspenseQuery(tenantsQueryOptions({ current: 1, size: 1000 }))

  return {
    columns: createColumns([
      {
        title: t('NAME'),
        dataIndex: 'roleName',
        width: 90
      },
      {
        title: t('SYSTEM/DEPTS:TENANT'),
        dataIndex: 'tenantId',
        custom: {
          tooltip: true,
          formatter(value) {
            return records.find((i) => i.tenantId === value)?.tenantName ?? '-'
          }
        }
      },
      {
        title: t('ALIAS'),
        dataIndex: 'roleAlias'
      },
      {
        title: t('SORT'),
        dataIndex: 'sort',
        width: 60
      },
      createActions({
        width: 140,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(detailQueryOptions(record.id!))}
              onClick={async () => {
                modal.openRead()
                modal.setMeta(record.id!)
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
                modal.openEdit()
                modal.setMeta(record.id!)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.id!))
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
