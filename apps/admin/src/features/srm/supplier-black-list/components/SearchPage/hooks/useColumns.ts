import type { SupplierInfoVo } from '@raipiot-2f/api'

export const useColumns = () => {
  const { createColumns } = useTableCreator<SupplierInfoVo>()

  return createColumns([
    { title: '供应商编码', dataIndex: 'erpCode' },
    { title: '供应商名称', dataIndex: 'name' },
    { title: '加入黑名单时间', dataIndex: 'joinTime', custom: { date: true } },
    { title: '黑名单原因', dataIndex: 'reason' },
    { title: '黑名单失效时间', dataIndex: 'invalidTime', custom: { date: true } },
    { title: '创建人', dataIndex: 'creator' },
    { title: '创建时间', dataIndex: 'createTime', custom: { date: true } }
  ])
}
