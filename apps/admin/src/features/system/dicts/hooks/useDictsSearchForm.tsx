import type { DictSearchFormModel } from '@/features/system/dicts'

// 在系统字典、系统字典配置中通用
export const useDictsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DICTS')
  const { createResponsiveFormItems } = useFormCreator<DictSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
      {
        type: 'input',
        formItemProps: {
          name: 'code',
          label: t('CODE')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'dictValue',
          label: t('DICT.VALUE')
        }
      }
    ])
  }
}
