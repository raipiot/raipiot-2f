/* eslint-disable no-console */
import type { DictPageDto, DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  systemDictsQK,
  useDictsColumns,
  useDictsSearchFormItems,
  useSystemDictRemoveMutation,
  useSystemDictsSuspenseQuery
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/templates/common-table')({
  component: CommonTable
})

function CommonTable() {
  const { t } = useTranslation()

  const { pageParams, setPageParams, pagination } = usePagination<DictPageDto>()
  const { rowSelection, selectedRowKeys, clearSelectedRowKeys } = useRowSelection<DictVo>()

  const [form] = AForm.useForm()
  const {
    data: { records, total },
    isFetching,
    refetch
  } = useSystemDictsSuspenseQuery(pageParams)
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  const formItems = useDictsSearchFormItems()
  const columns = useDictsColumns()

  return (
    <TableLayout<DictVo>
      // 头部属性
      headerProps={{
        // 头部操作区域
        renderOperate: (
          <AButton
            type="primary"
            onClick={() => {}}
          >
            {t('CREATE')}
          </AButton>
        )
      }}
      // 搜索栏属性
      searchBarProps={{
        // 搜索栏表单项
        formItems,
        // 搜索栏表单
        form,
        // 搜索事件
        onSearch: (values) => setPageParams(PageUtils.mergeParams(values))
      }}
      // 表格属性
      tableProps={{
        rowKey: (record) => record.id!,
        // 批量选择
        rowSelection,
        // 表格列
        columns,
        // 数据源
        dataSource: records,
        // 分页
        pagination: { ...pagination, total }
      }}
      // 刷新加载状态
      refreshLoading={isFetching}
      // 刷新事件
      onRefresh={refetch}
      // 批量删除加载状态
      batchDeleteLoading={isPending}
      // 批量删除
      onBatchDelete={(ids) =>
        mutateAsync(ids.join(), {
          onSuccess: () => clearSelectedRowKeys()
        })
      }
      // 表格批量操作区域
      renderTableBatchOpeate={
        <AButton onClick={() => console.log(selectedRowKeys)}>批量操作</AButton>
      }
      // 表格操作区域
      renderTableOpeate={
        <>
          <AButton
            onClick={() => {
              queryClient.invalidateQueries({
                predicate: ({ queryKey }) => queryKey.includes(systemDictsQK().at(0)),
                refetchType: 'active'
              })
            }}
          >
            打印表格
          </AButton>
          <AButton>导出数据</AButton>
        </>
      }
    />
  )
}
