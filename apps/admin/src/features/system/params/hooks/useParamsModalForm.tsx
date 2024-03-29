import type { ParamSubmitFormModel } from '../types'

export const useParamsModalForm = () => {
  const { t } = useTranslation(['SYSTEM/PARAMS', 'COMMON'])
  const { createModalForm } = useFormCreator<ParamSubmitFormModel>()
  const [modalForm] = AForm.useForm<ParamSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'paramName',
          label: t('PARAMS.NAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'paramKey',
          label: t('PARAMS.KEY'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'paramValue',
          label: t('PARAMS.VALUE'),
          rules: [{ required: true }]
        },
        textAreaProps: {
          rows: 3
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'remark',
          label: t('COMMON:REMARK')
        },
        textAreaProps: {
          rows: 3
        }
      }
    ])
  }
}
