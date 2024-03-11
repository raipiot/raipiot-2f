import type { ParamSearchFormModel } from '../types'

export const useParamsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/PARAMS')
  const { createResponsiveFormItems } = useFormCreator<ParamSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
      {
        type: 'input',
        formItemProps: {
          name: 'paramName',
          label: t('PARAMS.NAME')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'paramKey',
          label: t('PARAMS.KEY')
        }
      }
    ])
  }
}
