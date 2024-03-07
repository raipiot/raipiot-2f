import type { DictValuePageDto, DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  systemDictValuesQueryOptions,
  useDictsSearchForm,
  useDictValuesColumns,
  useSystemDictRemoveMutation
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/$id')({
  component: SystemDictItem
})

function SystemDictItem() {
  const { t } = useTranslation()

  const { id } = useParams({ from: '/_base/system/dicts/$id' })
  const { pageParams, setPageParams, pagination } = usePagination<DictValuePageDto>({
    parentId: id
  })
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()
  const { searchForm, searchFormItems } = useDictsSearchForm()
  const columns = useDictValuesColumns()

  const { data, isFetching, refetch } = useSuspenseQuery(systemDictValuesQueryOptions(pageParams))
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  useEffect(() => clearSelectedRowKeys(), [isFetching, clearSelectedRowKeys])

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
        form: searchForm,
        formItems: searchFormItems,
        onSearch: (values) => setPageParams(PageUtils.mergeParams(pageParams, values))
      }}
      tableProps={{
        rowKey: (record) => record.id!,
        rowSelection,
        columns,
        dataSource: data,
        pagination: pagination()
      }}
      refreshLoading={isFetching}
      onRefresh={refetch}
      batchDeleteLoading={isPending}
      onBatchDelete={(ids) =>
        mutateAsync(ids.join(), {
          onSuccess: () => clearSelectedRowKeys()
        })
      }
      renderTableOpeate={
        <Link to="/system/dicts">
          <AButton>{t('BACK')}</AButton>
        </Link>
      }
    />
  )
}
