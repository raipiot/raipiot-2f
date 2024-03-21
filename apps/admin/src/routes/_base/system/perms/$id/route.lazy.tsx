import type { ScopePageDto, ScopeVo } from '@raipiot-2f/api'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/system/perms/$id')({
  component: function Page() {
    const { id } = useParams({
      from: '/_base/system/perms/$id'
    })
    return (
      <Perms.ModalProvider>
        <Component />
        <Perms.BaseModal menuId={id} />
      </Perms.ModalProvider>
    )
  }
})

function Component() {
  const { id } = useParams({
    from: '/_base/system/perms/$id'
  })
  const { t } = useTranslation('SYSTEM/PERMS')
  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<ScopePageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<ScopeVo>()

  const { searchForm, searchFormItems } = Perms.usePermissionSearchForm()
  const { modal, form } = Perms.useScopeConfigContext()
  const { isPending: removePending, mutate } = Perms.useScopeRemoveMutation()

  const search = useSearch({ from: '/_base/system/perms/$id' })
  const { columns } = Perms.useScopeColumns(search)

  const {
    data: { records, total }
  } = useSuspenseQuery(
    Perms.scopePermissionsQueryOptions(
      PageUtils.mergeParams(pageParams, {
        menuId: id
      }),
      search.type
    )
  )
  useEffect(() => {
    clearSelectedRowKeys()
  }, [isPending, removePending, clearSelectedRowKeys])

  return (
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
        ),
        backBtn: true,
        title: (
          <ABreadcrumb
            items={[
              {
                title: t('PERMS.CONFIG')
              },
              {
                title: search.menuName
              }
            ]}
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
          startTransition(() =>
            setPageParams(PageUtils.mergeParams(pageParams, { ...values, current: 1 }))
          )
        }
      />
      {/* 表格 */}
      <RpBasicTable<ScopeVo>
        rowKey={(record) => record.id!}
        // 批量选择选项
        rowSelection={rowSelection}
        // 表格列
        columns={columns}
        // 表格数据
        dataSource={records}
        // 分页器
        pagination={pagination({
          total
        })}
        // 刷新加载
        refreshLoading={isPending}
        // 事件：刷新
        onRefresh={() => startTransition(() => {})}
        // 批量删除加载
        batchDeleteLoading={removePending}
        // 事件：批量删除
        onBatchDelete={(idArr) => {
          const ids = idArr.join(',')
          mutate(
            { ids, type: search.type },
            {
              onSuccess: clearSelectedRowKeys
            }
          )
        }}
      />
    </RpPageContainer>
  )
}
