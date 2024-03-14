import type { UserSubmitFormModel } from '../types'

export const useUsersModalForm = () => {
  const { t } = useTranslation(['SYSTEM/USERS', 'COMMON'])
  const { createModalForm } = useFormCreator<UserSubmitFormModel>()
  const [modalForm] = AForm.useForm<UserSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'tenantId',
          label: t('TENANT'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'account',
          label: t('LOGIN.ACCOUNT'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'userType',
          label: t('PLATFORM'),
          rules: [{ required: true }]
        },
        textAreaProps: {
          rows: 3
        }
      }
    ])
  }
}
