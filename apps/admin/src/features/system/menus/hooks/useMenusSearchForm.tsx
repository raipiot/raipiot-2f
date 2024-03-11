import type { MenuSearchFormModel } from '../types'

export const useMenusSearchForm = () => {
  const { t } = useTranslation('SYSTEM/MENUS')
  const { createResponsiveFormItems } = useFormCreator<MenuSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
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
