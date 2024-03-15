import { deptTreeQueryOptions } from '../queries'
import type { DeptsSubmitFormModel } from '../types'

export const useDeptsModalForm = () => {
  const { t } = useTranslation(['SYSTEM/DEPTS', 'COMMON'])
  const { createModalForm } = useFormCreator<DeptsSubmitFormModel>()
  const [modalForm] = AForm.useForm<DeptsSubmitFormModel>()

  const { data } = useSuspenseQuery(deptTreeQueryOptions())
  const { data: treeData } = useSuspenseQuery(Dicts.treeQueryOptions('org_category'))

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
          treeData: [{ title: t('COMMON:NONE'), value: '0', key: '0' }, ...data]
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
