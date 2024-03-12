import type { TenantSubmitFormModel } from '../types'

export const useTenantsModalForm = () => {
  const { t } = useTranslation(['SYSTEM/TENANTS', 'COMMON'])
  const { createResponsiveFormItems } = useFormCreator<TenantSubmitFormModel>()
  const [modalForm] = AForm.useForm<TenantSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createResponsiveFormItems([
      {
        type: 'input',
        formItemProps: {
          name: 'tenantName',
          label: t('NAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'linkman',
          label: t('CONTACT'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'contactNumber',
          label: t('PHONE')
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'address',
          label: t('ADDRESS')
        },
        textAreaProps: {
          rows: 3
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'domainUrl',
          label: t('DOMAIN')
        }
      }
    ])
  }
}
