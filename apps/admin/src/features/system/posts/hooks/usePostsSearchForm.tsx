import type { PostSearchFormModel } from '../types'

export const usePostsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/POSTS')
  const { createSearchForm } = useFormCreator<PostSearchFormModel>()
  const [searchForm] = AForm.useForm()

  const { data } = useSuspenseQuery(Dicts.treeQueryOptions('post_category'))

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'select',
        formItemProps: {
          name: 'category',
          label: t('CATEGORY')
        },
        selectProps: {
          options: data
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'postCode',
          label: t('CODE')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'postName',
          label: t('NAME')
        }
      }
    ])
  }
}
