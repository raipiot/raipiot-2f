import type { TenantSettingFormModel } from '../types'

export const useTenantsSettingForm = () => {
  const { t } = useTranslation(['SYSTEM/TENANTS', 'COMMON'])
  const { createModalForm } = useFormCreator<TenantSettingFormModel>()
  const [settingForm] = AForm.useForm<TenantSettingFormModel>()

  return {
    settingForm,
    settingFormItems: createModalForm([
      {
        type: 'input-number',
        colProps: {
          span: 24
        },
        formItemProps: {
          name: 'accountNumber',
          label: t('ACCOUNT.LIMIT')
        },
        inputNumberProps: {
          style: {
            width: '100%'
          }
        }
      },
      {
        type: 'date-picker',
        colProps: {
          span: 24
        },
        formItemProps: {
          name: 'expireTime',
          label: t('EXPIRE.TIME')
        },
        datePickerProps: {
          showTime: true,
          showNow: true,
          style: {
            width: '100%'
          }
        }
      }
    ])
  }
}
