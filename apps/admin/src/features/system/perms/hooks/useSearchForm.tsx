import type { LazyMenuPageDto } from '@raipiot-2f/api'

export const useSearchForm = () => {
  const { t } = useTranslation('SYSTEM/MENUS')
  const { createSearchForm } = useFormCreator<LazyMenuPageDto>()
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
      }
    ])
  }
}
