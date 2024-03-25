import type { UserPageDto, UserVo } from '@raipiot-2f/api'

import { useLogoutMutation } from '@/features/auth/login'

export const Route = createLazyFileRoute('/_base/system/users')({
  component: () => (
    <Users.ModuleProvider>
      <Component />
      <Users.BaseModal />
      <Users.PlatformModal />
    </Users.ModuleProvider>
  )
})

function Component() {
  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<UserPageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys, selectedRowKeys } = useRowSelection<UserVo>()
  // 搜索表单
  const { searchForm, searchFormItems } = Users.useSearchForm()
  // 表格列
  const { columns } = Users.useColumns()

  const { modal, form } = Users.useBaseModalContext()

  const { operateSuccess } = useMessage()
  const { t } = useTranslation(['SYSTEM/USERS', 'COMMON'])

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(Users.listQueryOptions(PageUtils.mergeParams(pageParams)))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = Users.useRemoveMutation()

  const logoutMutation = useLogoutMutation()

  const handleLogout = () =>
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        console.log('logout,,')
      }
    })

  // 清空选中行
  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <AFlex gap={6}>
            <RpButton
              variant="create"
              onClick={() => {
                form.resetFields()
                modal.openCreate()
              }}
            />
            <Users.ImportDataModal />
            <RpButton variant="export" />
          </AFlex>
        )
      }}
    >
      <div className="flex flex-col space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="w-full shrink-0 sm:w-[250px]">
          <Depts.Tree
            deptId={pageParams.deptId}
            onSelectDeptId={(id) =>
              startTransition(() =>
                setPageParams(
                  PageUtils.mergeParams(pageParams, {
                    deptId: id
                  })
                )
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
                Users.listQueryOptions(PageUtils.mergeParams(pageParams, values))
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
              onPrefetch: (values) => queryClient.prefetchQuery(Users.listQueryOptions(values))
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
            renderTableBatchOpeate={
              <AFlex
                gap={6}
                align="center"
              >
                <RpButton
                  onClick={async () => {
                    AModal.confirm({
                      title: t('RESET.PASSWORD'),
                      content: t('CONFIRM.RESET.PASSWORD'),
                      onOk: async () => {
                        await usersAPI.resetPassword(selectedRowKeys.join(','))
                        const userInfo = await queryClient.ensureQueryData(Users.infoQueryOptions())
                        if (selectedRowKeys.includes(userInfo.id!)) {
                          // 重置当前用户密码，退出登录
                          handleLogout()
                        } else {
                          operateSuccess()
                          clearSelectedRowKeys()
                        }
                      }
                    })
                  }}
                >
                  {t('RESET.PASSWORD')}
                </RpButton>
                <RpButton
                  onClick={async () => {
                    AModal.confirm({
                      title: t('UNLOCK.ACCOUNT'),
                      content: t('CONFIRM.UNLOCK'),
                      onOk: async () => {
                        await usersAPI.unlock(selectedRowKeys.join(','))
                        operateSuccess()
                        clearSelectedRowKeys()
                      }
                    })
                  }}
                >
                  账号解封
                </RpButton>
              </AFlex>
            }
          />
        </div>
      </div>
    </RpPageContainer>
  )
}
