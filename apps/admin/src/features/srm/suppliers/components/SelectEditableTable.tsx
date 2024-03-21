import type { SupplierVo } from '@raipiot-2f/api'

import { SelectTable } from './SelectTable'

interface ListVo
  extends Pick<SupplierVo, 'name' | 'erpCode' | 'serviceTypeList' | 'taxpayerTypeName'>,
    ContactVo {
  id: string
}

interface ContactVo {
  id: string
  contact?: string
  mobilePhone?: string
  email?: string
  createdTime?: string
}

const mockItem = (id: string) => ({
  id,
  name: '供应商1',
  erpCode: '001',
  serviceTypeList: ['生产', '销售'],
  taxpayerTypeName: '一般纳税人',
  contact: '张三',
  mobilePhone: '13800000000',
  email: 'xxx@xxx.com',
  createdTime: '2021-08-01'
})

export function SelectEditableTable() {
  const { rowSelection, selectedRowKeys } = useRowSelection()
  const { createColumns, createActions } = useTableCreator<ListVo>()

  const modal = useModal()

  const [listData, setListData] = useImmer<ListVo[]>([mockItem('1'), mockItem('2')])
  const [currentEditItems, setCurrentEditItems] = useImmer<ContactVo[]>([])

  // 添加
  const addItem = () =>
    setListData((draft) => {
      draft.unshift(mockItem('3'))
    })

  // 批量删除
  const batchRemoveItems = (ids: string[]) => {
    setListData((draft) => draft.filter((i) => !ids.includes(i.id)))
    setCurrentEditItems((draft) => draft.filter((i) => !ids.includes(i.id)))
  }

  // 是否可编辑
  const isEditable = (id: string) => currentEditItems.some((i) => i.id === id)

  // 获取数据
  const getEditFieldValue = (id: string, fieldName: keyof ContactVo) => {
    const item = currentEditItems.find((i) => i.id === id)
    return item?.[fieldName]
  }

  // 编辑
  const setEditItem = (id: string, item: ContactVo) =>
    setCurrentEditItems((draft) => {
      draft.push({ ...item, id })
    })

  const columns = createColumns([
    {
      title: '供应商名称',
      dataIndex: 'name'
    },
    {
      title: '供应商编码',
      dataIndex: 'erpCode'
    },
    {
      title: '经营性质',
      dataIndex: 'serviceTypeList'
    },
    {
      title: '纳税人类型',
      dataIndex: 'taxpayerTypeName'
    },
    {
      title: '联系人',
      dataIndex: 'contact',
      render: (value, record) =>
        isEditable(record.id) ? (
          <AInput
            className="cursor-pointer"
            value={getEditFieldValue(record.id, 'contact')}
            readOnly
            onClick={() => {}}
            suffix={<MaterialSymbolsSearchRounded />}
          />
        ) : (
          value
        )
    },
    {
      title: '联系方式',
      dataIndex: 'mobilePhone',
      render: (value, record) =>
        isEditable(record.id) ? getEditFieldValue(record.id, 'mobilePhone') : value
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      render: (value, record) =>
        isEditable(record.id) ? getEditFieldValue(record.id, 'email') ?? value : value
    },
    {
      title: '注册日期',
      dataIndex: 'createdTime',
      render: (value, record) =>
        isEditable(record.id) ? getEditFieldValue(record.id, 'createdTime') ?? value : value
    },
    createActions({
      render: (_value, record) =>
        isEditable(record.id) ? (
          <RpButton
            variant="cancel-edit"
            size="small"
            onClick={() => batchRemoveItems([record.id])}
          />
        ) : (
          <RpButton
            variant="edit"
            size="small"
            onClick={() => setEditItem(record.id, record)}
          />
        )
    })
  ])

  return (
    <>
      <ASpace
        direction="vertical"
        className="w-full"
      >
        <div className="flex w-full items-center justify-between">
          <RpDeletePopconfirm onConfirm={() => batchRemoveItems(selectedRowKeys as string[])}>
            <RpButton variant="batch-delete" />
          </RpDeletePopconfirm>
          <RpButton
            variant="add"
            onClick={() => modal.openCreate()}
          />
        </div>
        <ATable<ListVo>
          rowKey={(record) => record.id!}
          rowSelection={rowSelection}
          dataSource={listData}
          columns={columns}
          pagination={false}
          scroll={{ x: 2000 }}
        />
      </ASpace>
      <RpModal
        type={modal.type}
        open={modal.open}
        title="选择供应商"
        onOk={() => {}}
        onCancel={modal.close}
      >
        <SelectTable />
      </RpModal>
    </>
  )
}
