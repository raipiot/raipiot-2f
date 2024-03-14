import { SystemDictCode, systemDictTreeQueryOptions } from '@/features/system/dicts'

import type { UserPlatformFormModel } from '../types'

export const useUsersPlatformForm = () => {
  const { t } = useTranslation(['SYSTEM/USERS', 'COMMON'])
  const { createModalForm } = useFormCreator<UserPlatformFormModel>()
  const [form] = AForm.useForm<UserPlatformFormModel>()

  const { data } = useSuspenseQuery(systemDictTreeQueryOptions(SystemDictCode.USER_TYPE))

  return {
    form,
    formItems: createModalForm([
      {
        type: 'select',
        colProps: {
          span: 24
        },
        formItemProps: {
          name: 'userType',
          label: t('PLATFORM')
        },
        selectProps: {
          allowClear: true,
          options: data
        }
      },
      {
        type: 'text-area',
        colProps: {
          span: 24
        },
        formItemProps: {
          name: 'userExt',
          label: t('EXT')
        },
        textAreaProps: {
          rows: 3
        }
      }
    ])
  }
}
