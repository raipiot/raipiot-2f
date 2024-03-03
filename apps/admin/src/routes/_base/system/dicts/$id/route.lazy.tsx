import type { DictValuePageDto, DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  useDictsSearchForm,
  useDictValuesColumns,
  useSystemDictRemoveMutation,
  useSystemDictValuesSuspenseQuery
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
  const { form, formItems } = useDictsSearchForm()
  const columns = useDictValuesColumns()

  const { data, isFetching, refetch } = useSystemDictValuesSuspenseQuery(pageParams)
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  useEffect(
    () => clearSelectedRowKeys(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFetching]
  )

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
        onSearch: (values) => setPageParams(PageUtils.mergeParams(pageParams, values))
      }}
      tableProps={{
        rowKey: (record) => record.id!,
        rowSelection,
        columns,
        dataSource: data,
        pagination
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
