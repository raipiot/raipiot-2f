import type { DictSubmitFormModel } from '../types'

export const useDictsModalForm = () => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createResponsiveFormItems } = useFormCreator<DictSubmitFormModel>()
  const [modalForm] = AForm.useForm<DictSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createResponsiveFormItems([
      {
        type: 'input',
        key: 'code',
        formItemProps: {
          name: 'code',
          label: t('CODE'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        key: 'dictValue',
        formItemProps: {
          name: 'dictValue',
          label: t('DICT.VALUE'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input-number',
        key: 'sort',
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
        key: 'isSealed',
        formItemProps: {
          name: 'isSealed',
          label: t('COMMON:IS.SEALED'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        key: 'remark',
        formItemProps: {
          name: 'remark',
          label: t('COMMON:REMARK')
        }
      }
    ])
  }
}
