import { useBaseContext } from '../context'
import { treeQueryOptions } from '../queries'
import type { SubmitFormModal } from '../types'

export const useModalForm = () => {
  const { t } = useTranslation(['SYSTEM/DEPTS', 'COMMON'])
  const { createModalForm } = useFormCreator<SubmitFormModal>()
  const { disabledParentId } = useBaseContext()
  const [modalForm] = AForm.useForm<SubmitFormModal>()

  const { data } = useSuspenseQuery(treeQueryOptions())
  const { data: treeData } = useSuspenseQuery(Dicts.treeQueryOptions('org_category'))
  console.log(data)
  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'deptName',
          label: t('NAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'fullName',
          label: t('FULLNAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'tree-select',
        formItemProps: {
          name: 'parentId',
          label: t('PARENT')
        },
        treeSelectProps: {
          treeData: data,
          disabled: disabledParentId,
          showSearch: !disabledParentId,
          allowClear: !disabledParentId,
          treeNodeFilterProp: 'title'
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
        type: 'tree-select',
        formItemProps: {
          name: 'deptCategory',
          label: t('TYPE'),
          rules: [{ required: true }]
        },
        treeSelectProps: {
          treeData
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
