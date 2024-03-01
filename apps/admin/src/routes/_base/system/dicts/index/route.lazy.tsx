import type { DictPageDto, DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  useDictsColumns,
  useDictsSearchForm,
  useSystemDictRemoveMutation,
  useSystemDictsSuspenseQuery
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation()

  const { pageParams, setPageParams, pagination } = usePagination<DictPageDto>()
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()

  const {
    data: { records, total },
    isFetching,
    refetch
  } = useSystemDictsSuspenseQuery(pageParams)
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  const { form, formItems } = useDictsSearchForm()
  const columns = useDictsColumns()

  useEffect(() => {
    clearSelectedRowKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

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
      searchBarProps={{
        formItems,
        form,
        onSearch: (values) => setPageParams(PageUtils.mergeParams(values))
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
          onSuccess: () => clearSelectedRowKeys()
        })
      }
    />
  )
}
