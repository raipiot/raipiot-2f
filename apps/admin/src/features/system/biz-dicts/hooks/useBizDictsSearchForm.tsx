import type { BizDictSearchFormModel } from '@/features/system/biz-dicts'

// 在系统字典、系统字典配置中通用
export const useBizDictsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DICTS')
  const { createSearchForm } = useFormCreator<BizDictSearchFormModel>()
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
