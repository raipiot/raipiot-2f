import type { SupplierEntryVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

export const useColumns = () => {
  const { createColumns, createActions } = useTableCreator<SupplierEntryVo>()

  return createColumns([
    { title: '申请单号', dataIndex: 'entryNo' },
    { title: '状态', dataIndex: 'status' },
    { title: '供应商编码', dataIndex: 'supplierCode' },
    { title: '供应商名称', dataIndex: 'supplierName' },
    { title: '所属基地', dataIndex: 'fromCompanyName' },
    { title: '创建人', dataIndex: 'creatorName' },
    { title: '操作时间', dataIndex: 'createdTime', custom: { date: true } },
    createActions({
      width: 250,
      render: (_, record) => (
        // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
        <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
          <Link
            to="/srm/supplier-entry/$id/detail"
            params={{ id: record.id! }}
          >
            <RpButton
              variant="view"
              size="small"
            />
          </Link>
          <Link
            to="/srm/supplier-entry/$id/edit"
            params={{ id: record.id! }}
          >
            <RpButton
              variant="edit"
              size="small"
            />
          </Link>
          <RpSubmitPopconfirm>
            <AButton size="small">撤回</AButton>
          </RpSubmitPopconfirm>
          <RpSubmitPopconfirm>
            <RpButton
              variant="submit"
              size="small"
              type="default"
            />
          </RpSubmitPopconfirm>
        </ASpace>
      )
    })
  ])
}
