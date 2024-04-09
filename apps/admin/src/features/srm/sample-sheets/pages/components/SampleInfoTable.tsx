import type { SampleInfo } from '@raipiot-2f/api'
import type { FormListFieldData } from 'antd'
import { isMobile } from 'react-device-detect'

interface SampleInfoTableProps {
  id?: string | number
}
export default function SampleInfoTable({ id }: SampleInfoTableProps) {
  const { createActions } = useTableCreator<SampleInfo>()
  const [form] = AForm.useForm()
  const [materialIdList, setMaterialIdList] = useState<string[]>([])

  const initialValues = {
    list: [
      {
        materialId: '1',
        materialName: '物料名称',
        materialDescription: '物料说明',
        unit: '单位',
        // 品类代码
        categoryCode: '1',
        // 品类名称
        categoryName: '品类名称',
        // 送样需求数量
        sampleDemandQuantity: '1',
        // 送样需求时间
        sampleDemandTime: '2021-08-01',
        // 试用部门
        trialDepartment: '试用部门',
        // 试样车间
        trialWorkshop: '试样车间'
      }
    ]
  }
  if (id === undefined) return null
  return (
    <div>
      <AForm
        form={form}
        initialValues={initialValues}
      >
        <AForm.List name="list">
          {(fields, { remove }) => {
            const propName = [
              'materialId',
              'materialName',
              'materialDescription',
              'unit',
              'categoryCode',
              'categoryName',
              'sampleDemandQuantity',
              'sampleDemandTime',
              'trialDepartment',
              'trialWorkshop'
            ]

            const columns = [
              {
                title: '物料编码',
                dataIndex: 'materialId',
                key: 'sampleName',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[0]]}
                  >
                    <ASelect
                      showSearch
                      placeholder="关键词搜索"
                      className="w-full"
                      filterOption={false}
                      onSearch={(value: string) => {
                        setMaterialIdList([value])
                      }}
                      options={materialIdList.map((materialId) => ({
                        label: materialId,
                        value: materialId
                      }))}
                    />
                  </AForm.Item>
                )
              },
              {
                title: '物料名称',
                dataIndex: 'materialName',
                key: 'materialName',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[1]]}
                  >
                    <AInput
                      variant="borderless"
                      readOnly
                    />
                  </AForm.Item>
                )
              },
              {
                title: '物料说明',
                dataIndex: 'materialDescription',
                key: 'materialDescription',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[1]]}
                  >
                    <AInput
                      variant="borderless"
                      readOnly
                    />
                  </AForm.Item>
                )
              },
              {
                title: '单位',
                dataIndex: 'unit',
                key: 'unit',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[1]]}
                  >
                    <AInput
                      variant="borderless"
                      readOnly
                    />
                  </AForm.Item>
                )
              },
              {
                title: '品类代码',
                dataIndex: 'categoryCode',
                key: 'categoryCode',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[2]]}
                  >
                    <AInput />
                  </AForm.Item>
                )
              },
              {
                title: '品类名称',
                dataIndex: 'categoryName',
                key: 'categoryName',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[3]]}
                  >
                    <AInput />
                  </AForm.Item>
                )
              },
              {
                title: '送样需求数量',
                dataIndex: 'sampleDemandQuantity',
                key: 'sampleDemandQuantity',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[4]]}
                  >
                    <AInput />
                  </AForm.Item>
                )
              },
              {
                title: '送样需求时间',
                dataIndex: 'sampleDemandTime',
                key: 'sampleDemandTime',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[2]]}
                  >
                    <AInput />
                  </AForm.Item>
                )
              },
              {
                title: '试用部门',
                dataIndex: 'trialDepartment',
                key: 'trialDepartment',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[3]]}
                  >
                    <AInput />
                  </AForm.Item>
                )
              },
              {
                title: '试样车间',
                dataIndex: 'trialWorkshop',
                key: 'trialWorkshop',
                render: (_: unknown, field: FormListFieldData) => (
                  <AForm.Item
                    noStyle
                    name={[field.name, propName[4]]}
                  >
                    <AInput />
                  </AForm.Item>
                )
              },
              createActions({
                width: 400,
                render: (_, record) => (
                  // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
                  <ASpace
                    className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}
                  >
                    <RpButton
                      size="small"
                      type="link"
                    >
                      上传采购方附件
                    </RpButton>
                    <RpButton
                      size="small"
                      type="link"
                    >
                      制定供应商附件
                    </RpButton>
                    <RpButton
                      variant="delete"
                      size="small"
                      onClick={() => remove(record.name)}
                    />
                  </ASpace>
                )
              })
            ]

            return (
              <div>
                <AFlex
                  justify="space-between"
                  align="center"
                >
                  <div className="p-4 text-lg">样品信息</div>
                  <RpButton
                    variant="add"
                    onClick={() => {
                      const oldFormValues = form.getFieldsValue()
                      const newFormValues = {
                        list: [
                          ...oldFormValues.list,
                          {
                            materialId: '123',
                            materialName: '-',
                            materialDescription: '-',
                            unit: '-',
                            categoryCode: '-',
                            categoryName: '-',
                            sampleDemandQuantity: '-',
                            sampleDemandTime: '-',
                            trialDepartment: '=',
                            trialWorkshop: '-'
                          }
                        ]
                      }
                      form.setFieldsValue(newFormValues)
                    }}
                  />
                </AFlex>
                {/* 根据场景展示样品信息，需要模拟用户身份 */}
                <ATable
                  columns={columns as any}
                  scroll={{
                    x: '2000px'
                  }}
                  pagination={false}
                  dataSource={fields}
                />
              </div>
            )
          }}
        </AForm.List>
      </AForm>
    </div>
  )
}
