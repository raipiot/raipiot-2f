import type { InvitationSearchFormModel } from '@/features/srm/invitations'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<InvitationSearchFormModel>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'supplier',
          label: '供应商'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'customer',
          label: '客户'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'material',
          label: '物料'
        }
      }
    ])
  }
}
