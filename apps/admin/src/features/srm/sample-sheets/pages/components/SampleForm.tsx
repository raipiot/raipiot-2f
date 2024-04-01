import type { Handmade } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import SampleInfoTable from './SampleInfoTable'

interface SampleFormProps {
  id?: string | number
  form: FormInstance
  initialValues?: Handmade
}

export default function SampleForm({ id, form, initialValues }: SampleFormProps) {
  // 获取数据，初始化表单

  const { createModalForm } = useFormCreator<Handmade>()
  const items = createModalForm([
    // {
    //   type: 'debounce-select',
    //   formItemProps: {
    //     label: '业务实体',
    //     name: ''
    //   },
    //   debounceSelectProps: {
    //     fetchOptions
    //   }
    // },
    {
      type: 'custom',
      hidden: !id,
      render(_, index) {
        return (
          <AForm.Item
            key={index}
            label="申请单号"
          >
            <RpField value={initialValues?.id} />
          </AForm.Item>
        )
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '创建人',
        name: 'initiator'
      },
      hidden: !id,
      inputProps: {
        variant: 'borderless',
        readOnly: true
      }
    },
    {
      type: 'custom',
      render(record, index) {
        return (
          <AForm.Item
            key={index}
            label="创建时间"
          >
            <RpField
              value="2023-11-12 00:33:12"
              date
            />
          </AForm.Item>
        )
      },
      hidden: !id
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '库存组织',
        name: 'inventoryOrganizationId'
      },
      debounceSelectProps: {
        fetchOptions
      }
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '供应商',
        name: 'supplierId'
      },
      debounceSelectProps: {
        fetchOptions
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '供应商类型',
        name: 'supplierType',
        rules: [{ required: true }]
      },
      selectProps: {
        options: [
          {
            label: '选项1',
            value: '1'
          },
          {
            label: '选项2',
            value: '2'
          }
        ]
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '原厂名称',
        name: 'originalFactoryName'
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '送样类型',
        name: 'sampleType',
        rules: [{ required: true }]
      },
      selectProps: {
        options: [
          {
            label: '选项1',
            value: '1'
          },
          {
            label: '选项2',
            value: '2'
          }
        ]
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '紧急程度',
        name: 'urgency'
      },
      selectProps: {
        options: [
          {
            label: '选项1',
            value: '1'
          },
          {
            label: '选项2',
            value: '2'
          }
        ]
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '送样地址',
        name: 'sampleAddress'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '接样人',
        name: 'sampleRecipient',
        rules: [{ required: true }]
      }
    },
    {
      // 电话
      type: 'input',
      formItemProps: {
        label: '接样联系电话',
        name: 'sampleRecipientPhone',
        rules: [
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ]
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '申请人联系电话',
        name: 'applicantPhone',
        rules: [
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ]
      }
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '接收部门',
        name: 'recipientDepartmentId'
      },
      debounceSelectProps: {
        fetchOptions
      }
    },
    {
      type: 'switch',
      formItemProps: {
        label: '是否需要供应商反馈',
        name: 'needFeedbackFlag'
      },
      switchProps: {
        checkedChildren: '是',
        unCheckedChildren: '否'
      }
    },
    {
      type: 'custom',
      render(record, index) {
        return (
          <AForm.Item
            key={index}
            label="单据状态"
          >
            <RpField value={record} />
          </AForm.Item>
        )
      },
      hidden: !id
    },
    {
      type: 'input',
      formItemProps: {
        label: '送样申请来源',
        name: 'sampleApplicationSource',
        rules: [{ required: true }]
      }
    },
    {
      type: 'text-area',
      formItemProps: {
        label: '备注',
        name: 'notes'
      },
      colProps: {
        span: 24
      }
    }
  ])

  useEffect(() => {
    if (id) {
      queryClient.ensureQueryData(SampleSheets.queries.detailOP(`${id}`)).then((data) => {
        form.setFieldsValue(data)
      })
    }
    // 修改点击保存按钮的回调
  }, [id])

  return (
    <>
      <RpDynamicForm<Handmade>
        form={form}
        items={items}
        mode={id ? 'edit' : 'create'}
        initialValues={initialValues}
      />
      <SampleInfoTable id={id} />
    </>
  )
}

async function fetchOptions(value: string): Promise<{ label: string; value: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        }
      ] as const)
    }, 1000)
  })
}
