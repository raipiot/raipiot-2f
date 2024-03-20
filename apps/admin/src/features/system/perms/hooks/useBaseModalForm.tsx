import type { ScopeSubmitDto, ScopeTypeString } from '@raipiot-2f/api'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'

export const useBaseModalForm = () => {
  const { t } = useTranslation(['SYSTEM/PERMS', 'COMMON'])
  const { createModalForm } = useFormCreator<Partial<ScopeSubmitDto>>()
  const [modalForm] = AForm.useForm<Partial<ScopeSubmitDto>>()
  const scopeTypeValue = AForm.useWatch('scopeType', modalForm)

  const searchSelect = useSearch({
    from: '/_base/system/perms/$id'
  }) as { type: ScopeTypeString }
  const { data } = useSuspenseQuery(
    Dicts.directoryQueryOptions(searchSelect.type === 'api' ? 'api_scope_type' : 'data_scope_type')
  )

  const items: RpBasicFormItem<Partial<ScopeSubmitDto>>[] =
    searchSelect.type === 'data'
      ? [
          {
            type: 'input',
            formItemProps: {
              name: 'scopeColumn',
              label: t('PERMS.FIELD'),
              rules: [{ required: true }]
            }
          },
          {
            type: 'select',
            formItemProps: {
              name: 'scopeType',
              label: t('INTERFACE.TYPE'),
              rules: [{ required: true }]
            },
            selectProps: {
              options: data
            }
          },
          {
            type: 'input',
            formItemProps: {
              name: 'scopeField',
              label: t('VISIBLE.FIELD'),
              rules: [{ required: true }]
            }
          },
          {
            type: 'input',
            formItemProps: {
              name: 'scopeClass',
              label: t('PERMS.CLASSNAME'),
              rules: [{ required: true }]
            }
          },
          {
            type: 'text-area',
            colProps: { span: 24 },
            formItemProps: {
              name: 'scopeValue',
              rules: [{ required: true }],
              label: t('RULE.VALUE')
            },
            hidden: scopeTypeValue !== data[data.length - 1].value
          }
        ]
      : [
          {
            type: 'input',
            formItemProps: {
              name: 'scopePath',
              label: t('PERMS.PATH'),
              rules: [{ required: true }]
            }
          },
          {
            type: 'tree-select',
            formItemProps: {
              name: 'scopeType',
              label: t('INTERFACE.TYPE'),
              rules: [{ required: true }]
            },
            treeSelectProps: {
              treeData: data
            }
          }
        ]

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'scopeName',
          label: t('PERMS.NAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'resourceCode',
          label: t('PERMS.RESOURCE.CODE'),
          rules: [{ required: true }]
        }
      },
      ...items,
      {
        type: 'input',
        formItemProps: {
          name: 'remark',
          label: t('COMMON:REMARK')
        }
      }
    ])
  }
}
