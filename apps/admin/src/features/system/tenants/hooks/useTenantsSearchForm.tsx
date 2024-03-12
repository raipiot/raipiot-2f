import type { TenantSearchFormModel } from '../types'

export const useTenantsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/TENANTS')
  const { createResponsiveFormItems } = useFormCreator<TenantSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
      {
        type: 'input',
        formItemProps: {
          name: 'tenantId',
          label: t('ID')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'tenantName',
          label: t('NAME')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'linkman',
          label: t('CONTACT')
        }
      }
    ])
  }
}
