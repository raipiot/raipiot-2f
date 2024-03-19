import type { ScopeSubmitDto } from '@raipiot-2f/api'

export const usePermissionSearchForm = () => {
  const { t } = useTranslation('SYSTEM/PERMS')
  const { createSearchForm } = useFormCreator<ScopeSubmitDto>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'scopeName',
          label: t('PERMS.NAME')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'resourceCode',
          label: t('PERMS.RESOURCE.CODE')
        }
      }
    ])
  }
}
