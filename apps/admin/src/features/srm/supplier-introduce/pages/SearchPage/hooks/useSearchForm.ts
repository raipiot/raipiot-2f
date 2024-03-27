import type { SupplierIntroSearchFormModel } from '../../../types'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<SupplierIntroSearchFormModel>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'range-picker',
        formItemProps: {
          name: 'createdTime',
          label: '创建时间'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'requestNo',
          label: '申请单号'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'creatorName',
          label: '申请人'
        }
      }
    ])
  }
}
