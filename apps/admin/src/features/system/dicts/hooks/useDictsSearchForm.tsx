import type { DictSearchForm } from '@raipiot-2f/api'

export const useDictsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DICTS')
  const { createSearchFormItems } = useSearchFormCreator<DictSearchForm>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchFormItems([
      {
        type: 'input',
        key: 'code',
        formItemProps: {
          name: 'code',
          label: t('CODE')
        }
      },
      {
        type: 'input',
        key: 'dictValue',
        formItemProps: {
          name: 'dictValue',
          label: t('DICT.VALUE')
        }
      }
    ])
  }
}
