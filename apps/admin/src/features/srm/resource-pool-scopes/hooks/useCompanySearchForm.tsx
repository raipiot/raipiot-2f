import type { ResourcePoolScopeCompanySearchFormModel } from '../types'

export const useCompanySearchForm = () => {
  const { createSearchForm } = useFormCreator<ResourcePoolScopeCompanySearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'code',
          label: '公司编码'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'name',
          label: '公司名称'
        }
      }
    ])
  }
}
