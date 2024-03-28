import type { LocalSupplierVo } from '@raipiot-2f/api'

export const useColumns = () => {
  const { createColumns } = useTableCreator<LocalSupplierVo>()

  return createColumns([
    { title: '统一社会信用代码', dataIndex: 'unifiedSocialCode' },
    { title: '本地供应商编码', dataIndex: 'supplierCode' },
    { title: '本地供应商名称', dataIndex: 'name' },
    { title: '平台供应商编码', dataIndex: 'organizationCode' }
  ])
}
