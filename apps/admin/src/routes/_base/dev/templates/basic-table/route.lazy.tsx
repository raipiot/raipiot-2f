import type { DictPageDto, DictVo } from '@raipiot-2f/api'

import {
  systemDictsQueryOptions,
  useDictsColumns,
  useDictsModalForm,
  useDictsSearchForm,
  useSystemDictRemoveMutation,
  useSystemDictSubmitMutation
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/dev/templates/basic-table')({
  component: BasicTable
})

function BasicTable() {
  // 国际化
  const { t } = useTranslation()

  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<DictPageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()
  // 弹窗
  const modal = useModal()
  // 搜索表单
  const { searchForm, searchFormItems } = useDictsSearchForm()
  // 弹窗表单
  const { modalForm, modalFormItems } = useDictsModalForm()
  // 表格列
  const { columns } = useDictsColumns({ modal, form: modalForm })

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(systemDictsQueryOptions(PageUtils.mergeParams(pageParams)))
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
        // 操作区
        operate: (
          <RpCreateBtn
            onClick={() => {
              modalForm.resetFields()
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
            systemDictsQueryOptions(PageUtils.mergeParams(pageParams, values))
          )
        }
      />
      {/* 表格 */}
      <RpTable<DictVo>
        rowKey={(record) => record.id!}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={records}
        pagination={pagination({
          total,
          onPrefetch: (values) => queryClient.prefetchQuery(systemDictsQueryOptions(values))
        })}
        refreshLoading={isPending}
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        batchDeleteLoading={isRemovePending}
        onBatchDelete={(ids) =>
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
      />
      {/* 弹窗 */}
      <RpModal
        open={modal.open}
        title={modal.getTitle()}
        confirmLoading={isSubmitPending}
        onOk={modalForm.submit}
        onCancel={modal.close}
        footer={modal.isRead ? null : undefined}
      />
    </RpPageContainer>
  )
}
