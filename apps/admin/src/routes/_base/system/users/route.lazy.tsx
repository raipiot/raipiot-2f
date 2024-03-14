import type { UserPageDto, UserVo } from '@raipiot-2f/api'

import { DeptTree } from '@/features/system/depts'
import {
  BaseModal,
  PlatformModal,
  useBaseModalContext,
  UsersProvider,
  usersQueryOptions,
  useUserRemoveMutation,
  useUsersColumns,
  useUsersSearchForm
} from '@/features/system/users'

export const Route = createLazyFileRoute('/_base/system/users')({
  component: () => (
    <UsersProvider>
      <Users />
      <BaseModal />
      <PlatformModal />
    </UsersProvider>
  )
})

export function Users() {
  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<UserPageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<UserVo>()
  // 搜索表单
  const { searchForm, searchFormItems } = useUsersSearchForm()
  // 表格列
  const { columns } = useUsersColumns()

  const { modal, form } = useBaseModalContext()

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(usersQueryOptions(PageUtils.mergeParams(pageParams)))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = useUserRemoveMutation()

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <RpButton
            variant="create"
            onClick={() => {
              form?.resetFields()
              modal?.openCreate()
            }}
          />
        )
      }}
    >
      <div className="flex flex-col space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="w-full shrink-0 sm:w-[250px]">
          <DeptTree
            deptId={pageParams.deptId}
            onSelectDeptId={(id) =>
              startTransition(() =>
                setPageParams(PageUtils.mergeParams(pageParams, { deptId: id }))
              )
            }
          />
        </div>
        {/* 搜索区域 */}
        <div className="flex flex-col space-y-2 sm:w-[calc(100%-256px)] sm:space-y-4">
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
                usersQueryOptions(PageUtils.mergeParams(pageParams, values))
              )
            }
          />
          {/* 表格 */}
          <RpBasicTable<UserVo>
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
              onPrefetch: (values) => queryClient.prefetchQuery(usersQueryOptions(values))
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
            scroll={{ x: 1800 }}
          />
        </div>
      </div>
    </RpPageContainer>
  )
}
