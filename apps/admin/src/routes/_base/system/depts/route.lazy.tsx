import type { DeptsDto, DeptVo } from '@raipiot-2f/api'

export const Route = createLazyFileRoute('/_base/system/depts')({
  component: () => (
    <Depts.DeptsProvider>
      <Component />
      <Depts.BaseModal />
    </Depts.DeptsProvider>
  )
})

function Component() {
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DeptVo>()
  // 弹窗
  const { modal, form } = Depts.useBaseModalContext()
  // 搜索表单
  const { searchForm, searchFormItems } = Depts.useSearchForm()
  // 数据更新
  const [isPending, startTransition] = useTransition()
  // 表格列
  const { columns } = Depts.useBaseColumns()
  // 查询参数
  const [filter, setFilter] = useState<DeptsDto>()

  // 异步查询：列表数据
  const { data, refetch } = useSuspenseQuery(Depts.listQueryOptions(filter))

  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = Depts.useRemoveMutation()

  // 清空选中行
  useEffect(clearSelectedRowKeys, [clearSelectedRowKeys, isPending])

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <RpButton
            variant="create"
            onClick={() => {
              form.resetFields()
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
    </RpPageContainer>
  )
}
