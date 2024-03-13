import type { TenantSettingsDto } from '@raipiot-2f/api'

export const useTenantsSettingForm = () => {
  const { t } = useTranslation(['SYSTEM/TENANTS', 'COMMON'])
  const { createModalForm } = useFormCreator<TenantSettingsDto>()
  const [settingForm] = AForm.useForm<TenantSettingsDto>()

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
