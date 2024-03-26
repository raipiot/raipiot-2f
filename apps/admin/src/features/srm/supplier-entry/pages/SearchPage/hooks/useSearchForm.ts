import type { SupplierEntrySearchFormModel } from '@/features/srm/supplier-entry'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<SupplierEntrySearchFormModel>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'supplierName',
          label: '供应商'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'fromCompany',
          label: '所属基地'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'status',
          label: '状态'
        },
        selectProps: {
          options: [
            { label: '待提交', value: '1' },
            { label: '待审核', value: '2' },
            { label: '审核中', value: '3' },
            { label: '审核通过', value: '4' },
            { label: '审核驳回', value: '5' }
          ],
          allowClear: true
        }
      }
    ])
  }
}
