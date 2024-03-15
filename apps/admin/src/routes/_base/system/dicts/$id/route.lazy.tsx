import type { SystemDictConfigPageDto, SystemDictVo } from '@raipiot-2f/api'

export const Route = createLazyFileRoute('/_base/system/dicts/$id')({
  component: () => (
    <Dicts.ModuleProvider>
      <Component />
      <Dicts.BaseModal />
    </Dicts.ModuleProvider>
  )
})

function Component() {
  const { id } = useParams({ from: '/_base/system/dicts/$id' })
  const staticData = useRouteStaticData()
  const { pageParams, setPageParams, isPending, startTransition } =
    usePagination<SystemDictConfigPageDto>({
      parentId: id
    })
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<SystemDictVo>()
  // 搜索表单
  const { searchForm, searchFormItems } = Dicts.useSearchForm()
  // 表格列
  const { columns } = DictConfigs.useColumns()

  const { modal, form } = Dicts.useBaseModalContext()

  // 异步查询：列表数据
  const { data, refetch } = useSuspenseQuery(
    DictConfigs.listQueryOptions(PageUtils.mergeParams(pageParams))
  )
  // 异步查询：父级字典详情
  const { data: parentDictData } = useSuspenseQuery(Dicts.detailQueryOptions(id))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = Dicts.useRemoveMutation()

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
              form.resetFields()
              form.setFieldsValue({
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
            DictConfigs.listQueryOptions(PageUtils.mergeParams(pageParams, values))
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
    </RpPageContainer>
  )
}
