import { systemDictTreeQueryOptions } from '../../dicts'
import { SystemDictCode } from '../../dicts/enum'
import { PostSearchFormModel } from '../types'

export const usePostsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/POST')
  const { data } = useSuspenseQuery(systemDictTreeQueryOptions(SystemDictCode.SYSTEM_POST))
  console.log(data)
  const { createResponsiveFormItems } = useFormCreator<PostSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createResponsiveFormItems([
      {
        type: 'select',
        formItemProps: {
          name: 'category',
          label: t('POST.CATEGORY')
        },
        selectProps: {
          options: data
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'postCode',
          label: t('POST.POST.CODE')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'postName',
          label: t('POST.POST.NAME')
        }
      }
    ])
  }
}
