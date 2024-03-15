import type { SystemDictSearchFormModel } from '@/features/system/dicts'

// 在系统字典、系统字典配置中通用
export const useSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DICTS')
  const { createSearchForm } = useFormCreator<SystemDictSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createSearchForm([
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
