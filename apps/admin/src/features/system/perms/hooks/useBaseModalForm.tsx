import type { ScopeSubmitDto } from '@raipiot-2f/api'

export const useBaseModalForm = () => {
  const { t } = useTranslation(['SYSTEM/PERMS', 'COMMON'])
  const { createModalForm } = useFormCreator<ScopeSubmitDto>()
  const [modalForm] = AForm.useForm()
  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'scopeName',
          label: t('NAME'),
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
          treeData: []
        }
      },
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
