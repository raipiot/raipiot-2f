import type { ReactNode } from 'react'

import genEditTableColumns from './RpEditTableColumns'

interface RpEditTableProps {
  title?: ReactNode
  operate?: ReactNode
}
export default function RpEditTable({ title, operate }: RpEditTableProps) {
  const form = AForm.useForm()[0]
  const [rawData, setRawData] = useState<any[]>([
    {
      name: 'name1',
      age: 32,
      address: 'address1'
    },
    {
      name: 'name2',
      age: 42,
      address: 'address2'
    }
  ])

  return (
    <div>
      <AForm
        form={form}
        initialValues={{
          list: rawData
        }}
      >
        <AForm.List name="list">
          {(fields, { add, remove }) => (
            <div>
              <AFlex
                justify="space-between"
                align="flex-start"
              >
                <div>{title}</div>
                {operate ?? (
                  <AForm.Item>
                    <AButton
                      onClick={() => {
                        setRawData([
                          ...rawData,
                          {
                            name: '',
                            age: 10,
                            address: '233'
                          }
                        ])
                        add()
                        form.setFieldValue(['list', fields.length], {
                          name: '',
                          age: 10,
                          address: '233'
                        })
                      }}
                    >
                      Add
                    </AButton>
                  </AForm.Item>
                )}
              </AFlex>
              <ATable
                columns={genEditTableColumns({ remove, rawData })}
                dataSource={fields}
              />
            </div>
          )}
        </AForm.List>
      </AForm>
      <button
        type="button"
        className="mt-4 rounded-md border p-1"
        onClick={() => {
          console.log(form.getFieldsValue())
        }}
      >
        Console form values
      </button>
    </div>
  )
}
