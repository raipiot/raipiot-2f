import { type DeptsDto, type DeptVo } from '@raipiot-2f/api'

import { Depts } from '@/features/system/depts'

function DeptsTable() {
  // 分页器
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DeptVo>()
  // 弹窗
  const modal = useModal()
  // 搜索表单
  const { searchForm, searchFormItems } = Depts.useSearchForm()
  // 弹窗表单
  const { modalForm, modalFormItems } = Depts.useModalForm()
  // 表格列
  const { columns } = Depts.useTableColumns({ modal, form: modalForm })
  // 查询参数
  const [filter, setFilter] = useState<DeptsDto>()

  // 异步查询：列表数据
  const { data, isPending, refetch } = useSuspenseQuery(Depts.listQueryOptions(filter))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = Depts.useRemoveMutation()
  // 异步提交
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } = Depts.useSubmitMutation()

  // 清空选中行
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
          startTransition(() => {
            setFilter(values)
          })
        }
        // 事件：预渲染
        onPrefetch={(values) => queryClient.prefetchQuery(Depts.listQueryOptions(values))}
      />
      {/* 表格 */}
      <RpBasicTable<DeptVo>
        rowKey={(record) => record.id!}
        // 批量选择选项
        rowSelection={rowSelection}
        // 表格列
        columns={columns}
        // 表格数据
        dataSource={data}
        // 刷新加载
        refreshLoading={isPending}
        // 事件：刷新
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        // 批量删除加载
        batchDeleteLoading={isRemovePending}
        // 事件：批量删除
        onBatchDelete={(ids) =>
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
        scroll={{ x: 1600 }}
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
          // 表单
          form={modalForm}
          // 表单配置项
          items={modalFormItems}
          // 表单模式
          mode={modal.type}
          // 表单提交
          onFinish={async () => {
            const values = modalForm.getFieldsValue(true)
            submitMutateAsync(values, {
              onSuccess: modal.close
            })
          }}
        />
      </RpModal>
    </RpPageContainer>
  )
}

export const Route = createLazyFileRoute('/_base/system/depts')({
  component: DeptsTable
})
