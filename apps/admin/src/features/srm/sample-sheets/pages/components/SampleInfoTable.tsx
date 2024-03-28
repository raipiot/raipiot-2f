import type { SampleInfo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

interface SampleInfoTableProps {
  id?: string | number
}
export default function SampleInfoTable({ id }: SampleInfoTableProps) {
  const { createActions, createColumns } = useTableCreator<SampleInfo>()

  const columns = createColumns([
    {
      title: '物料编码',
      dataIndex: 'materialId',
      key: 'sampleName'
    },
    {
      title: '物料名称',
      dataIndex: 'materialName',
      key: 'materialName'
    },
    {
      title: '样品数量',
      dataIndex: 'sampleNumber',
      key: 'sampleNumber'
    },
    {
      title: '样品规格',
      dataIndex: 'sampleSpecification',
      key: 'sampleSpecification'
    },
    {
      title: '样品类型',
      dataIndex: 'sampleType',
      key: 'sampleType'
    },
    {
      title: '样品数量',
      dataIndex: 'sampleNumber',
      key: 'sampleNumber'
    },
    {
      title: '样品规格',
      dataIndex: 'sampleSpecification',
      key: 'sampleSpecification'
    },
    {
      title: '样品类型',
      dataIndex: 'sampleType',
      key: 'sampleType'
    },
    createActions({
      width: 300,
      render: (_, record) => (
        // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
        <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
          <RpButton type="link">上传采购方附件</RpButton>
          <RpButton type="link">制定供应商附件</RpButton>
        </ASpace>
      )
    })
  ])

  const { selectedRowKeys, clearSelectedRowKeys } = useRowSelection()

  if (id === undefined) return null
  return (
    <div>
      <AFlex
        justify="space-between"
        align="center"
      >
        <div className="p-4 text-lg">样品信息</div>
        <RpButton variant="add" />
      </AFlex>
      <RpBasicTable
        columns={columns}
        onBatchDelete={() => {
          console.log(selectedRowKeys)
          clearSelectedRowKeys()
        }}
      />
    </div>
  )
}
