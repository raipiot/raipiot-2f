import type { LocalSupplierSearchFormModel } from '@/features/srm/suppliers/types'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<LocalSupplierSearchFormModel>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'unifiedSocialCode',
          label: '统一社会信用代码'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'name',
          label: '供应商名称'
        }
      }
    ])
  }
}
