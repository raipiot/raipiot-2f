import type { DeptVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { tenantsQueryOptions } from '../../tenants'
import { useBaseContext, useBaseModalContext } from '../context'
import { useRemoveMutation } from '../mutations'
import { detailQueryOptions } from '../queries'

export const useBaseColumns = () => {
  const { modal, form } = useBaseModalContext()
  const { setDisabledParentId } = useBaseContext()
  const { t } = useTranslation(['SYSTEM/DEPTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<DeptVo>()

  const { mutateAsync, isPending } = useRemoveMutation()
  const {
    data: { records }
  } = useSuspenseQuery(tenantsQueryOptions({ current: 1, size: 1000 }))

  return {
    columns: createColumns([
      {
        title: t('NAME'),
        dataIndex: 'deptName'
      },
      {
        title: t('TENANT'),
        dataIndex: 'tenantId',
        render: (value) => (
          <RpTagString value={records.find((i) => i.tenantId === value)?.tenantName ?? '-'} />
        )
      },
      {
        title: t('FULLNAME'),
        dataIndex: 'fullName'
      },
      {
        title: t('TYPE'),
        dataIndex: 'deptCategoryName',
        render: (value) => <RpTagString value={value} />
      },
      {
        title: t('SORT'),
        dataIndex: 'sort',
        width: 60
      },
      {
        title: t('COMMON:REMARK'),
        dataIndex: 'remark',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      createActions({
        width: 240,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(detailQueryOptions(record.id!))}
              onClick={async () => {
                modal.openRead()
                modal.setMeta(record)
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
                modal.setMeta(record)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.id!))
                )
              }}
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => mutateAsync(record.id)}
            >
              <RpButton
                variant="delete"
                size="small"
              />
            </RpDeletePopconfirm>
            <RpButton
              size="small"
              onClick={async () => {
                modal.openCreate()
                setDisabledParentId?.(true)
                form.setFieldsValue({ parentId: record.id })
              }}
              type="primary"
            >
              {t('ADD.CHILDREN')}
            </RpButton>
          </ASpace>
        )
      })
    ])
  }
}
