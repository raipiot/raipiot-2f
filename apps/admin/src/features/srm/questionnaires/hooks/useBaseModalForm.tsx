import type { QuestionnaireSubmitFormModel } from '../types'

export const useBaseModalForm = () => {
  const { createModalForm } = useFormCreator<QuestionnaireSubmitFormModel>()
  const [modalForm] = AForm.useForm<QuestionnaireSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'controlDimension',
          label: '调查表管控维度',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'company',
          label: '业务实体',
          rules: [{ required: true }]
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'questionnaireType',
          label: '调查表类型',
          rules: [{ required: true }]
        },
        selectProps: {
          options: [
            { label: '生产制造类', value: '1' },
            { label: '贸易代理类', value: '2' }
          ]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'questionnaireTemplateId',
          label: '调查表模版',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'createUser',
          label: '创建人',
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'createDepartment',
          label: '创建部门',
          rules: [{ required: true }]
        }
      },
      {
        type: 'text-area',
        colProps: {
          span: 24
        },
        formItemProps: {
          name: 'application',
          label: '调查说明'
        },
        textAreaProps: {
          rows: 3
        }
      }
    ])
  }
}
