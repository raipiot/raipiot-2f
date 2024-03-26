import type { InvitationSubmitDto } from '@raipiot-2f/api'

export const useForm = () => {
  const { createModalForm } = useFormCreator<InvitationSubmitDto>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'fromCompany',
          label: '邀请方',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'toCompany',
          label: '供应商企业',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'erpCode',
          label: '供应商 ERP 编码'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'inviteeEmail',
          label: '供应商邮箱地址',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'supplierPhone',
          label: '供应商手机号'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'acceptedCategoryId',
          label: '准入品类',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'buyStrategyHead',
          label: '采购策略负责人',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'supplierPhone',
          label: '采购员手机号'
        }
      },
      {
        type: 'switch',
        formItemProps: {
          name: 'groupLevelFlag',
          label: '集团级'
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'invitationDescription',
          label: '邀请说明'
        },
        textAreaProps: {
          rows: 4
        }
      }
    ])
  }
}
