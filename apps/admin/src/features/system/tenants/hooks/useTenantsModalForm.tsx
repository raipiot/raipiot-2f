import type { UseModal } from '@/shared/hooks/useModal'

import { AccountLimit, ExpireTime } from '../components'
import type { TenantSubmitFormModel } from '../types'

interface UseTenantsModalFormProps {
  modal?: UseModal<string>
}

export const useTenantsModalForm = (props: UseTenantsModalFormProps) => {
  const { modal } = props ?? {}

  const { t } = useTranslation(['SYSTEM/TENANTS', 'COMMON'])
  const { createModalForm } = useFormCreator<TenantSubmitFormModel>()
  const [modalForm] = AForm.useForm<TenantSubmitFormModel>()

  return {
    modalForm,
    modalFormItems: createModalForm([
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
        type: 'form-item',
        formItemProps: {
          name: 'accountNumber',
          label: t('ACCOUNT.LIMIT')
        },
        render: (value) => <AccountLimit value={value} />,
        hidden: modal?.isEdit
      },
      {
        type: 'form-item',
        formItemProps: {
          name: 'expireTime',
          label: t('EXPIRE.TIME')
        },
        render: (value) => <ExpireTime value={value} />,
        hidden: modal?.isEdit
      },
      {
        type: 'input',
        formItemProps: {
          name: 'domainUrl',
          label: t('DOMAIN')
        }
      },
      {
        type: 'upload',
        formItemProps: {
          name: 'backgroundUrl',
          label: t('SYSTEM.BACKGROUND.IMAGE')
        }
      }
    ])
  }
}
