import type { PostSubmitDto } from '@raipiot-2f/api'

import { systemDictTreeQueryOptions } from '../../dicts'
import { SystemDictCode } from '../../dicts/enums'

export const usePostsModalForm = () => {
  const { t } = useTranslation(['SYSTEM/POSTS', 'COMMON'])
  const { createModalForm } = useFormCreator<PostSubmitDto>()
  const [modalForm] = AForm.useForm<PostSubmitDto>()
  const { data } = useSuspenseQuery(systemDictTreeQueryOptions(SystemDictCode.SYSTEM_POST))

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'tree-select',
        formItemProps: {
          name: 'category',
          label: t('CATEGORY')
        },
        treeSelectProps: {
          treeData: data
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'postCode',
          label: t('CODE'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'postName',
          label: t('NAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input-number',
        formItemProps: {
          name: 'sort',
          label: t('COMMON:SORT'),
          rules: [{ required: true }]
        },
        inputNumberProps: {
          style: { width: '100%' }
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'remark',
          label: t('COMMON:REMARK')
        },
        textAreaProps: {
          rows: 3
        }
      }
    ])
  }
}
