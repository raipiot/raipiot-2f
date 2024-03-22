import type { ResourcePoolScopeCategorySearchFormModel } from '../types'

export const useCategorySearchForm = () => {
  const { createSearchForm } = useFormCreator<ResourcePoolScopeCategorySearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'lgCode',
          label: '大类编码'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'lgName',
          label: '大类名称'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'mdCode',
          label: '中类编码'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'mdName',
          label: '中类名称'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'smCode',
          label: '小类编码'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'smName',
          label: '小类名称'
        }
      }
    ])
  }
}
