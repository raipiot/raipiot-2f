import type { DictValuePageDto, DictVo } from '@raipiot-2f/api'

import {
  systemDictsQueryOptions,
  systemDictValuesQueryOptions,
  useDictsModalForm,
  useDictsSearchForm,
  useDictValuesColumns,
  useSystemDictRemoveMutation,
  useSystemDictSubmitMutation
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/$id')({
  component: SystemDictItem
})

function SystemDictItem() {
  const { t } = useTranslation()

  const { id } = useParams({ from: '/_base/system/dicts/$id' })
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<DictValuePageDto>({
      parentId: id
    })
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()
  const modal = useModal()
  const { searchForm, searchFormItems } = useDictsSearchForm()
  const { modalForm, modalFormItems } = useDictsModalForm()
  const columns = useDictValuesColumns()

  const { data, isFetching, refetch } = useSuspenseQuery(systemDictValuesQueryOptions(pageParams))
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    useSystemDictRemoveMutation()
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } =
    useSystemDictSubmitMutation()

  useEffect(() => clearSelectedRowKeys(), [isFetching, clearSelectedRowKeys])

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <RpButton
            variant="create"
            onClick={() => {}}
          />
        )
      }}
    >
      <RpSearchBar
        formProps={{ form: searchForm }}
        formItems={searchFormItems}
        onSearch={(values) => setPageParams(PageUtils.mergeParams(pageParams, values))}
      />
      <RpBasicTable<DictVo>
        rowKey={(record) => record.id!}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={pagination({
          onPrefetch: (values) => queryClient.prefetchQuery(systemDictsQueryOptions(values))
        })}
        refreshLoading={isPending}
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        batchDeleteLoading={isRemovePending}
        onBatchDelete={(ids) =>
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
        renderTableOpeate={
          <Link to="/system/dicts">
            <RpButton variant="back" />
          </Link>
        }
      />
      <RpModal
        type={modal.type}
        open={modal.open}
        title={modal.getTitle()}
        confirmLoading={isSubmitPending}
        onOk={modalForm.submit}
        onCancel={modal.close}
        footer={modal.isRead ? null : undefined}
      />
    </RpPageContainer>
  )
}
