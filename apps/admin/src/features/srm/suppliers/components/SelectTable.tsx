import type { SupplierVo } from '@raipiot-2f/api'

export function SelectTable() {
  const { rowSelection, selectedRowKeys, clearSelectedRowKeys } = useRowSelection<SupplierVo>()

  return (
    // <RpBasicTable<SupplierVo>
    //   rowKey={(record) => record.id!}
    //   // 批量选择选项
    //   rowSelection={rowSelection}
    //   // 表格列
    //   columns={columns}
    //   // 表格数据
    //   dataSource={records}
    //   // 分页器
    //   pagination={pagination({
    //     total,
    //     // 事件：分页预渲染
    //     onPrefetch: (values) => queryClient.prefetchQuery(Questionnaires.listQueryOptions(values))
    //   })}
    //   // 刷新加载
    //   refreshLoading={isPending}
    //   // 事件：刷新
    //   onRefresh={() =>
    //     startTransition(() => {
    //       refetch()
    //     })
    //   }
    //   // 批量删除加载
    //   batchDeleteLoading={isRemovePending}
    //   // 事件：批量删除
    //   onBatchDelete={(ids) =>
    //     removeMutateAsync(ids.join(), {
    //       onSuccess: clearSelectedRowKeys
    //     })
    //   }
    //   scroll={{ x: 3500 }}
    // />
    ''
  )
}
