import type { QuestionnaireSearchFormModel } from '../types'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<QuestionnaireSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createSearchForm([
      // {
      //   type: 'input',
      //   formItemProps: {
      //     name: '',
      //     label: t('CODE')
      //   }
      // },
      // {
      //   type: 'input',
      //   formItemProps: {
      //     name: 'dictValue',
      //     label: t('DICT.VALUE')
      //   }
      // }
    ])
  }
}
