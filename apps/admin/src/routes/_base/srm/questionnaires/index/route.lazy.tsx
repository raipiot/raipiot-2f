import type { QuestionnairePageDto, QuestionnaireStatus, QuestionnaireVo } from '@raipiot-2f/api'

export const Route = createLazyFileRoute('/_base/srm/questionnaires/')({
  component: () => (
    <Questionnaires.ModuleProvider>
      <Component />
      <Questionnaires.BaseModal />
    </Questionnaires.ModuleProvider>
  )
})

function Component() {
  // 选项卡状态
  const { tabStateOptions, defaultTabState } = Questionnaires.useStatusTabOptions()

  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<QuestionnairePageDto>({
      status: defaultTabState
    })
  // 多选器：范型为列表行数据类型
  const { rowSelection, selectedRowKeys, clearSelectedRowKeys } = useRowSelection<QuestionnaireVo>()
  // 搜索表单
  const { searchForm, searchFormItems } = Questionnaires.useSearchForm()
  // 表格列
  const { columns } = Questionnaires.useBaseTableColumns()

  const { modal, form } = Questionnaires.useBaseModalContext()

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(Questionnaires.listQO(PageUtils.mergeParams(pageParams)))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    Questionnaires.useRemoveMutation()

  // 清空选中行
  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <Link to="/srm/questionnaires/create">
            <RpButton variant="create" />
          </Link>
        )
      }}
    >
      <ATabs
        activeKey={pageParams.status}
        onChange={(activeKey) =>
          startTransition(() =>
            setPageParams({ ...pageParams, status: activeKey as QuestionnaireStatus })
          )
        }
        tabBarStyle={{ marginBottom: 0 }}
        items={tabStateOptions}
      />
      {/* 搜索区域 */}
      <RpSearchBar
        // 搜索表单
        formProps={{ form: searchForm }}
        // 表单配置项
        formItems={searchFormItems}
        // 事件：搜索
        onSearch={(values) =>
          startTransition(() =>
            setPageParams(
              PageUtils.mergeParams(pageParams, values, (draft) => {
                const { createdTime, ...rest } = draft
                rest.createdStartTime = DateUtils.formatTime(createdTime?.[0])
                rest.createdEndTime = DateUtils.formatTime(createdTime?.[1])
                return rest
              })
            )
          )
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(
            Questionnaires.listQO(PageUtils.mergeParams(pageParams, values))
          )
        }
      />
      {/* 表格 */}
      <RpBasicTable<QuestionnaireVo>
        rowKey={(record) => record.questionnaireId!}
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
          onPrefetch: (values) => queryClient.prefetchQuery(Questionnaires.listQO(values))
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
        scroll={{ x: 3500 }}
        renderTableOpeate={
          <PermCodeProvider code="srm:questionnaires:create">
            <AButton disabled>批量发布</AButton>
          </PermCodeProvider>
        }
        renderTableBatchOpeate={
          <PermCodeProvider code="srm:questionnaires:create">
            <AButton
              onClick={() => {
                console.log(selectedRowKeys)
              }}
            >
              批量发布
            </AButton>
          </PermCodeProvider>
        }
      />
    </RpPageContainer>
  )
}
