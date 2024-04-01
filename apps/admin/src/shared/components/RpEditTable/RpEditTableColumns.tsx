interface Props {
  remove: (idx: number) => void
  rawData: any
}
export default function genEditTableColumns({ remove, rawData }: Props) {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record: any, idx: number) => (
        <AForm.Item
          noStyle
          name={[idx, 'name']}
          rules={[{ required: true }]}
        >
          <AInput />
        </AForm.Item>
      )
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render(text: any, record: any) {
        const values = rawData[record.key]
        return values?.age
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => rawData[record.key]?.address
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any, idx: number) => (
        <div className="flex gap-2">
          <AButton onClick={() => {}}>edit</AButton>
          <AButton onClick={() => remove(idx)}>Remove</AButton>
        </div>
      )
    }
  ]
}
