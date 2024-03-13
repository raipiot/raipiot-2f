import type { LazyMenuPageDto, MenuSubmitDto, SystemDictVo } from '@raipiot-2f/api'

import {
  menusQueryOptions,
  MenuType,
  updateMenuChildrenByParentId,
  useMenuRemoveMutation,
  useMenusColumns,
  useMenusModalForm,
  useMenusSearchForm,
  useMenuSubmitMutation
} from '@/features/system/menus'

export const Route = createLazyFileRoute('/_base/system/menus')({
  component: Menus
})

function Menus() {
  const [isPending, startTransition] = useTransition()

  // 查询参数
  const [pageParams, setPageParams] = useState<LazyMenuPageDto>({
    parentId: '0'
  })
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<SystemDictVo>()
  // 展开行
  const { expandedRowKeys, addExpandedRowKey, removeExpandedRowKey, clearExpandedRowKeys } =
    useExpandedRowkeys()
  // 弹窗
  const modal = useModal()
  // 搜索表单
  const { searchForm, searchFormItems } = useMenusSearchForm()
  // 弹窗表单
  const { modalForm, modalFormItems } = useMenusModalForm()
  // 表格列
  const { columns } = useMenusColumns({ modal, form: modalForm })

  // 异步查询：列表数据
  const { data, refetch } = useSuspenseQuery(menusQueryOptions(pageParams))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = useMenuRemoveMutation()
  // 异步提交
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } = useMenuSubmitMutation()

  // 清空选中行
  useEffect(() => {
    clearSelectedRowKeys()
    clearExpandedRowKeys()
  }, [isPending, isRemovePending, isSubmitPending, clearSelectedRowKeys, clearExpandedRowKeys])

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
            setPageParams({ ...pageParams, ...values })
          })
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(menusQueryOptions({ ...pageParams, ...values }))
        }
      />
      {/* 表格 */}
      <RpBasicTable<SystemDictVo>
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
        onBatchDelete={(ids) => removeMutateAsync(ids.join())}
        scroll={{ x: 2400 }}
        expandable={{
          expandedRowKeys,
          onExpand: async (expanded, record) => {
            if (expanded) {
              if (!record.children || record.children.length === 0) {
                const childrenData = await queryClient.ensureQueryData(
                  menusQueryOptions({ parentId: record.id! })
                )
                queryClient.setQueryData(menusQueryOptions(pageParams).queryKey, (oldData) =>
                  updateMenuChildrenByParentId(record.id!, childrenData, oldData)
                )
              }
              addExpandedRowKey(record.id!)
            } else {
              removeExpandedRowKey(record.id!)
            }
          }
        }}
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
          // 表单初始值
          initialValues={{
            sort: 1,
            category: MenuType.MENU
          }}
          // 表单提交
          onFinish={async () => {
            const values = modalForm.getFieldsValue(true) as MenuSubmitDto
            await submitMutateAsync(
              {
                ...values,
                isOpen: FormatUtils.toDbNum(values.isOpen)
              },
              { onSuccess: modal.close }
            )
          }}
        />
      </RpModal>
    </RpPageContainer>
  )
}
