/* eslint-disable no-console */
import type { DictVo, PageDto } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import {
  systemDictsQK,
  useDictsColumns,
  useSystemDictRemoveMutation,
  useSystemDictsSuspenseQuery
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/templates/common-table')({
  component: CommonTable
})

interface UIPageParams extends PageDto {
  array: string[]
}

function CommonTable() {
  const { t } = useTranslation()

  const { pageParams, pagination } = usePagination<UIPageParams>()
  const { rowSelection, selectedRowKeys } = useRowSelection<DictVo>()

  const {
    data: { records, total },
    isFetching,
    refetch
  } = useSystemDictsSuspenseQuery(
    PageUtils.formatParams(pageParams, (draft) => ({
      ...draft,
      array: draft.array.join()
    }))
  )
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

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
      // 表格属性
      tableProps={{
        rowKey: (record) => record.id!,
        rowSelection,
        columns,
        dataSource: records,
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
          onSuccess: () =>
            queryClient.invalidateQueries({
              predicate: (query) => query.queryKey.includes(systemDictsQK().at(0)),
              refetchType: 'active'
            })
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
