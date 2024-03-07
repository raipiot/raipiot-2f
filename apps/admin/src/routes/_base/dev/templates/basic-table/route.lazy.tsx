/* eslint-disable no-console */
import type { DictPageDto, DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  useDictsColumns,
  useDictsSearchForm,
  useSystemDictRemoveMutation,
  useSystemDictsSuspenseQuery
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/dev/templates/basic-table')({
  component: CommonTable
})

function CommonTable() {
  const { t } = useTranslation()

  // 构造分页器
  const { pageParams, setPageParams, pagination } = usePagination<DictPageDto>()
  // 构造批量选择
  const { rowSelection, selectedRowKeys, clearSelectedRowKeys } = useRowSelection<DictVo>()

  // 列表查询
  const {
    data: { records, total },
    isFetching,
    refetch
  } = useSystemDictsSuspenseQuery(pageParams)
  // 删除
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  // 构造搜索表单
  const { searchForm, searchFormItems } = useDictsSearchForm()
  // 构造表格列
  const { columns } = useDictsColumns()

  // 重置批量选择
  useEffect(() => {
    clearSelectedRowKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

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
        // 搜索栏表单
        form: searchForm,
        // 搜索栏表单项
        formItems: searchFormItems,
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
          <AButton>打印表格</AButton>
          <AButton>导出数据</AButton>
        </>
      }
    />
  )
}
