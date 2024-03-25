import type { UserPlatformFormModel } from '../types'

export const usePlatformForm = () => {
  const { t } = useTranslation(['SYSTEM/USERS', 'COMMON'])
  const { createModalForm } = useFormCreator<UserPlatformFormModel>()
  const [form] = AForm.useForm<UserPlatformFormModel>()

  const { data } = useSuspenseQuery(Dicts.treeQueryOptions('user_type'))

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
          options: data.map((i) => ({ ...i, value: Number(i.value) }))
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
