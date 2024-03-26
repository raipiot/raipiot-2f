import type { ResourcePoolScopePageDto, ResourcePoolScopeVo } from '@raipiot-2f/api'

import type { ResourcePoolScopeSearchFormModel } from '@/features/srm/resource-pool-scopes'

export const Route = createLazyFileRoute('/_base/srm/resource-pool-scopes/')({
  component: () => <Component />
})

function Component() {
  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<ResourcePoolScopePageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<ResourcePoolScopeVo>()
  // 搜索表单
  const { searchForm, searchFormItems } = ResourcePoolScopes.useBaseSearchForm()

  const { columns } = ResourcePoolScopes.useBaseColumns()

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(ResourcePoolScopes.listQO(PageUtils.mergeParams(pageParams)))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    ResourcePoolScopes.useRemoveMutation()

  // 清空选中行
  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  const formatPageParams = (values: ResourcePoolScopeSearchFormModel) =>
    PageUtils.mergeParams(pageParams, values, (draft) => {
      const { createdTime, ...rest } = draft
      const [startTime, endTime] = createdTime ?? []
      rest.createdStartTime = startTime ? DateUtils.formatTime(startTime) : undefined
      rest.createdEndTime = endTime ? DateUtils.formatTime(endTime) : undefined
      return rest
    })

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <PermCodeProvider code="srm:resource-pool-scopes:create">
            <Link to="/srm/resource-pool-scopes/create">
              <RpButton variant="create" />
            </Link>
          </PermCodeProvider>
        )
      }}
    >
      {/* 搜索区域 */}
      <RpSearchBar
        // 搜索表单
        formProps={{
          form: searchForm
        }}
        // 表单配置项
        formItems={searchFormItems}
        // 事件：搜索
        onSearch={(values) => startTransition(() => setPageParams(formatPageParams(values)))}
        // 事件：清空
        onClear={() =>
          startTransition(() => {
            setPageParams(PageUtils.initParams())
          })
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(ResourcePoolScopes.listQO(formatPageParams(values)))
        }
      />
      {/* 表格 */}
      <RpBasicTable<ResourcePoolScopeVo>
        rowKey={(record) => record.id!}
        // 批量选择选项
        rowSelection={rowSelection}
        // 表格列
        columns={columns}
        // 表格数据
        dataSource={records}
        // 分页器
        pagination={pagination({
          total,
          // 事件：分页预渲染
          onPrefetch: (values) => queryClient.prefetchQuery(ResourcePoolScopes.listQO(values))
        })}
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
          removeMutateAsync(ids as string[], {
            onSuccess: clearSelectedRowKeys
          })
        }
        scroll={{ x: 1800 }}
      />
    </RpPageContainer>
  )
}
