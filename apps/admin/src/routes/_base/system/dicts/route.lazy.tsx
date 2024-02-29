import type { DictPageDto, DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  systemDictsQK,
  useDictsColumns,
  useSystemDictRemoveMutation,
  useSystemDictsSuspenseQuery
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation()

  const { pageParams, pagination } = usePagination<DictPageDto>()
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()

  const {
    data: { records, total },
    isFetching,
    refetch
  } = useSystemDictsSuspenseQuery(pageParams)
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  const columns = useDictsColumns()

  return (
    <TableLayout<DictVo>
      headerProps={{
        renderOperate: (
          <AButton
            type="primary"
            onClick={() => {}}
          >
            {t('CREATE')}
          </AButton>
        )
      }}
      tableProps={{
        rowKey: (record) => record.id!,
        rowSelection,
        columns,
        dataSource: records,
        pagination: { ...pagination, total }
      }}
      refreshLoading={isFetching}
      onRefresh={refetch}
      batchDeleteLoading={isPending}
      onBatchDelete={(ids) =>
        mutateAsync(ids.join(), {
          onSuccess: () => {
            clearSelectedRowKeys()
            queryClient.invalidateQueries({
              predicate: ({ queryKey }) => queryKey.includes(systemDictsQK().at(0)),
              refetchType: 'active'
            })
          }
        })
      }
    />
  )
}
