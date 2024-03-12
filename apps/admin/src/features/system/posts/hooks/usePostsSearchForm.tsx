import { systemDictTreeQueryOptions } from '../../dicts'
import { SystemDictCode } from '../../dicts/enums'
import type { PostSearchFormModel } from '../types'

export const usePostsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/POSTS')
  const { data } = useSuspenseQuery(systemDictTreeQueryOptions(SystemDictCode.SYSTEM_POST))
  const { createResponsiveFormItems } = useFormCreator<PostSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
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
