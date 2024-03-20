import type { ScopeSubmitDto, ScopeTypeString } from '@raipiot-2f/api'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'

export const useBaseModalForm = () => {
  const { t } = useTranslation(['SYSTEM/PERMS', 'COMMON'])
  const { createModalForm } = useFormCreator<Partial<ScopeSubmitDto>>()
  const [modalForm] = AForm.useForm<Partial<ScopeSubmitDto>>()
  const id = useId()
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
            type: 'custom',
            render: () => (
              <AForm.Item
                noStyle
                key={id}
                shouldUpdate={(prev, cur) => {
                  if (prev.scopeType !== cur.scopeType) {
                    modalForm.setFieldsValue({ scopeValue: '' })
                  }
                  return prev.scopeType !== cur.scopeType
                }}
              >
                {({ getFieldValue }) =>
                  getFieldValue('scopeType') === data[data.length - 1].value ? (
                    <AForm.Item
                      label={t('RULE.VALUE')}
                      name="scopeValue"
                      rules={[{ required: true }]}
                      rootClassName="!px-[12px] !w-full"
                    >
                      <AInput.TextArea rows={3} />
                    </AForm.Item>
                  ) : null
                }
              </AForm.Item>
            )
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
