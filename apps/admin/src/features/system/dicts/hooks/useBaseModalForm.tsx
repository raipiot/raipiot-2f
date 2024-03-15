import type { SystemDictSubmitFormModel } from '../types'

export const useBaseModalForm = () => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createModalForm } = useFormCreator<SystemDictSubmitFormModel>()
  const [modalForm] = AForm.useForm<SystemDictSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'code',
          label: t('CODE'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'dictValue',
          label: t('DICT.VALUE'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input-number',
        formItemProps: {
          name: 'sort',
          label: t('COMMON:SORT'),
          rules: [{ required: true }]
        },
        inputNumberProps: {
          style: { width: '100%' }
        }
      },
      {
        type: 'switch',
        formItemProps: {
          name: 'isSealed',
          label: t('COMMON:IS.SEALED'),
          rules: [{ required: true }]
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
