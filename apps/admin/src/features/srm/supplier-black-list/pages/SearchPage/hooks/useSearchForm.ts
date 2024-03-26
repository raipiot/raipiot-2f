import type { SupplierBlackListSearchFormModel } from '@/features/srm/supplier-black-list'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<SupplierBlackListSearchFormModel>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'companyName',
          label: '供应商'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'reason',
          label: '黑名单原因'
        },
        selectProps: {
          options: [
            { label: '红牌', value: '1' },
            { label: '绿牌', value: '2' },
            { label: '黄牌', value: '3' },
            { label: '待定', value: '4' }
          ]
        }
      }
    ])
  }
}
