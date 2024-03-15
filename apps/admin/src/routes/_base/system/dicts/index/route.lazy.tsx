import type { SystemDictPageDto, SystemDictVo } from '@raipiot-2f/api'

export const Route = createLazyFileRoute('/_base/system/dicts/')({
  component: () => (
    <Dicts.ModuleProvider>
      <Component />
      <Dicts.BaseModal />
    </Dicts.ModuleProvider>
  )
})

function Component() {
  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<SystemDictPageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<SystemDictVo>()
  // 搜索表单
  const { searchForm, searchFormItems } = Dicts.useSearchForm()
  // 表格列
  const { columns } = Dicts.useColumns()

  const { modal, form } = Dicts.useBaseModalContext()

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(Dicts.listQueryOptions(PageUtils.mergeParams(pageParams)))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = Dicts.useRemoveMutation()

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
          startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(
            Dicts.listQueryOptions(PageUtils.mergeParams(pageParams, values))
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
        dataSource={records}
        // 分页器
        pagination={pagination({
          total,
          // 事件：分页预渲染
          onPrefetch: (values) => queryClient.prefetchQuery(Dicts.listQueryOptions(values))
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
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
        scroll={{ x: 1200 }}
      />
    </RpPageContainer>
  )
}
