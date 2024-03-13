import type { SystemDictSubmitDto, SystemDictValuePageDto, SystemDictVo } from '@raipiot-2f/api'

import {
  systemDictQueryOptions,
  systemDictValuesQueryOptions,
  useSystemDictRemoveMutation,
  useSystemDictsSearchForm,
  useSystemDictSubmitMutation,
  useSystemDictValuesColumns,
  useSystemDictValuesModalForm
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/$id')({
  component: SystemDictItem
})

function SystemDictItem() {
  const { id } = useParams({ from: '/_base/system/dicts/$id' })
  const staticData = useRouteStaticData()
  const { pageParams, setPageParams, isPending, startTransition } =
    usePagination<SystemDictValuePageDto>({
      parentId: id
    })
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<SystemDictVo>()
  // 弹窗
  const modal = useModal()
  // 搜索表单
  const { searchForm, searchFormItems } = useSystemDictsSearchForm()
  // 弹窗表单
  const { modalForm, modalFormItems } = useSystemDictValuesModalForm()
  // 表格列
  const { columns } = useSystemDictValuesColumns({ modal, form: modalForm })

  // 异步查询：列表数据
  const { data, refetch } = useSuspenseQuery(
    systemDictValuesQueryOptions(PageUtils.mergeParams(pageParams))
  )
  // 异步查询：父级字典详情
  const { data: parentDictData } = useSuspenseQuery(systemDictQueryOptions(id))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    useSystemDictRemoveMutation()
  // 异步提交
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } =
    useSystemDictSubmitMutation()

  // 清空选中行
  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        title: `${I18nUtils.getText(staticData.title)} - ${parentDictData.dictValue}`,
        // 操作区
        operate: (
          <RpButton
            variant="create"
            onClick={() => {
              modalForm.resetFields()
              modalForm.setFieldsValue({
                parentId: id,
                code: parentDictData.code,
                parentName: parentDictData.dictValue
              })
              modal.openCreate()
            }}
          />
        )
      }}
    >
      {/* 搜索区域 */}
      <RpSearchBar
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
            systemDictValuesQueryOptions(PageUtils.mergeParams(pageParams, values))
          )
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
        onBatchDelete={(ids) =>
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
        scroll={{ x: 1500 }}
        renderTableOpeate={
          <Link to="/system/dicts">
            <RpButton variant="back" />
          </Link>
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
          // 表单
          form={modalForm}
          // 表单配置项
          items={modalFormItems}
          // 表单模式
          mode={modal.type}
          // 表单初始值
          initialValues={{
            sort: 1,
            isSealed: false
          }}
          // 表单提交
          onFinish={async () => {
            const values = modalForm.getFieldsValue(true) as SystemDictSubmitDto
            await submitMutateAsync(
              {
                ...values,
                isSealed: FormatUtils.toDbNum(values.isSealed)
              },
              { onSuccess: modal.close }
            )
          }}
        />
      </RpModal>
    </RpPageContainer>
  )
}
