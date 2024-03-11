import type { DictPageDto, DictVo } from '@raipiot-2f/api'

import {
  systemDictsQueryOptions,
  useDictsColumns,
  useDictsModalForm,
  useDictsSearchForm,
  useSystemDictRemoveMutation,
  useSystemDictSubmitMutation
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/')({
  component: SystemDicts
})

function SystemDicts() {
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<DictPageDto>()
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()
  const modal = useModal()
  const { searchForm, searchFormItems } = useDictsSearchForm()
  const { modalForm, modalFormItems } = useDictsModalForm()
  const { columns } = useDictsColumns({ modal, form: modalForm })

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(systemDictsQueryOptions(PageUtils.mergeParams(pageParams)))
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    useSystemDictRemoveMutation()
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } =
    useSystemDictSubmitMutation()

  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <RpButton
            variant="create"
            onClick={() => {
              modalForm.resetFields()
              modal.openCreate()
            }}
          />
        )
      }}
    >
      {/* 搜索区域 */}
      <RpSearchBar
        // 搜索表单
        formProps={{ form: searchForm }}
        // 表单配置项
        formItems={searchFormItems}
        // 事件：搜索
        onSearch={(values) =>
          startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(
            systemDictsQueryOptions(PageUtils.mergeParams(pageParams, values))
          )
        }
      />
      {/* 表格 */}
      <RpBasicTable<DictVo>
        rowKey={(record) => record.id!}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={records}
        pagination={pagination({
          total,
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
      />
      {/* 模态框 */}
      <RpModal
        // 模态框类型
        type={modal.type}
        // 打开状态
        open={modal.open}
        // 标题
        title={modal.getTitle()}
        // 确认按钮加载
        confirmLoading={isSubmitPending}
        // 事件：确认
        onOk={modalForm.submit}
        // 事件：取消
        onCancel={modal.close}
        // 底部区域
        footer={modal.isRead ? null : undefined}
      >
        <RpDynamicForm
          name="modal"
          form={modalForm}
          items={modalFormItems}
          mode={modal.type}
          initialValues={{
            sort: 1,
            isSealed: false
          }}
          onFinish={async () => {
            const values = modalForm.getFieldsValue(true)
            await submitMutateAsync({
              ...values,
              isSealed: FormatUtils.toDbNum(values.isSealed)
            })
            modal.close()
          }}
        />
      </RpModal>
    </RpPageContainer>
  )
}
