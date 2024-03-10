import type { DictSearchFormModel } from '@/features/system/dicts'

export const useDictsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DICTS')
  const { createResponsiveFormItems } = useFormCreator<DictSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
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
