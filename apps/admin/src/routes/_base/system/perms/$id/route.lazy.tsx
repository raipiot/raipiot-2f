import type { ScopePageDto, ScopeTypeString, ScopeVo } from '@raipiot-2f/api'
import { createLazyFileRoute } from '@tanstack/react-router'

import { scopePermissionsQueryOptions } from '@/features/system/perms/queries'

export const Route = createLazyFileRoute('/_base/system/perms/$id')({
  component: () => (
    <Perms.ModalProvider>
      <Component />
      <Perms.BaseModal />
    </Perms.ModalProvider>
  )
})

function Component() {
  const { id } = useParams({
    from: '/_base/system/perms/$id'
  })

  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<ScopePageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<ScopeVo>()

  const { form, formItems } = Perms.usePermissionSearchForm()

  const search = useSearch({ from: '/_base/system/perms/$id' }) as { type: ScopeTypeString }
  const { columns } = Perms.useScopeColumns(search)

  const {
    data: { records, total }
  } = useSuspenseQuery(
    scopePermissionsQueryOptions(
      PageUtils.mergeParams(pageParams, {
        id
      }),
      'data'
    )
  )

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <RpButton
            variant="create"
            onClick={() => {}}
          />
        )
      }}
    >
      {/* 搜索区域 */}
      <RpSearchBar
        // 搜索表单
        formProps={{ form }}
        // 表单配置项
        formItems={formItems}
        // 事件：搜索
        onSearch={(values) =>
          startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))
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
        // batchDeleteLoading={() => {}}
        // 事件：批量删除
        onBatchDelete={(ids) => {}}
      />
    </RpPageContainer>
  )
}
