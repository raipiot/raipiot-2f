import type { MenuSearchFormModel } from '../types'

export const useMenusSearchForm = () => {
  const { t } = useTranslation('SYSTEM/MENUS')
  const { createSearchForm } = useFormCreator<MenuSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'name',
          label: t('NAME')
        }
      },
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
          name: 'alias',
          label: t('ALIAS')
        }
      }
    ])
  }
}
