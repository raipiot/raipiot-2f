import type { SupplierIntroVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

export const useColumns = () => {
  const { createColumns, createActions } = useTableCreator<SupplierIntroVo>()

  return createColumns([
    {
      title: '申请单',
      dataIndex: 'requestNo'
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '申请人',
      dataIndex: 'creatorName'
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      custom: { date: true }
    },
    {
      title: '审核通过时间',
      dataIndex: 'approvePassTime',
      custom: { date: true }
    },
    createActions({
      render: (_, record) => (
        // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
        <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
          <Link
            to="/srm/supplier-introduce/$id/detail"
            params={{ id: record.id! }}
          >
            <RpButton
              variant="view"
              size="small"
            />
          </Link>
          <Link
            to="/srm/supplier-introduce/$id/edit"
            params={{ id: record.id! }}
          >
            <RpButton
              variant="edit"
              size="small"
            />
          </Link>
          <AButton size="small">撤回</AButton>
          <AButton size="small">提交</AButton>
        </ASpace>
      )
    })
  ])
}
