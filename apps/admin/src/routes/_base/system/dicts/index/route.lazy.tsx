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
  const { open, toggle, setModalType, getModalTitle } = useModal()
  const { form, formItems } = useDictsSearchForm()
  const columns = useDictsColumns()

  const {
    data: { records, total },
    isFetching,
    refetch
  } = useSystemDictsSuspenseQuery(PageUtils.mergeParams(pageParams))
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
            onClick={() => {
              setModalType('create')
              toggle()
            }}
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
      modalProps={{
        open,
        title: getModalTitle(),
        onOk: () => {},
        onCancel: toggle,
        confirmLoading: true,
        children: 123
      }}
    />
  )
}
