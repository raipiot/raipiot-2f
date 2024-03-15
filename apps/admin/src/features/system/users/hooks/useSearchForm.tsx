import type { UserSearchFormModel } from '../types'

export const useSearchForm = () => {
  const { t } = useTranslation('SYSTEM/USERS')
  const { createSearchForm } = useFormCreator<UserSearchFormModel>()
  const [searchForm] = AForm.useForm()

  const { data } = useSuspenseQuery(Dicts.treeQueryOptions('user_type'))

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'account',
          label: t('LOGIN.ACCOUNT')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'realName',
          label: t('NAME')
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'userType',
          label: t('PLATFORM')
        },
        selectProps: {
          allowClear: true,
          options: data
        }
      }
    ])
  }
}
