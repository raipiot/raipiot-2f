import type { DictSubmitFormModel } from '../types'

export const useDictValuesModalForm = () => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createResponsiveFormItems } = useFormCreator<DictSubmitFormModel>()
  const [modalForm] = AForm.useForm<DictSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createResponsiveFormItems([
      {
        type: 'input',
        colProps: {
          span: 24
        },
        formItemProps: {
          name: 'code',
          label: t('CODE'),
          rules: [{ required: true }]
        },
        inputProps: {
          disabled: true
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
        type: 'input',
        formItemProps: {
          name: 'dictKey',
          label: t('DICT.KEY'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'parentName',
          label: t('PARENT.DICT')
        },
        inputProps: {
          disabled: true
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
