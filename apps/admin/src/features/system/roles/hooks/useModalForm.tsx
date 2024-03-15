import type { UseModal } from '@/shared/hooks/useModal'

import { tenantsSelectQueryOptions } from '../../tenants'
import { treeQueryOptions } from '../queries'
import type { SubmitFormModal } from '../types'

export const useModalForm = () => {
  const { t } = useTranslation(['SYSTEM/ROLES', 'COMMON'])
  const { createModalForm } = useFormCreator<SubmitFormModal>()
  const [form] = AForm.useForm<SubmitFormModal>()

  const { data } = useSuspenseQuery(treeQueryOptions())
  const { data: selectData } = useSuspenseQuery(tenantsSelectQueryOptions())

  return {
    form,
    genFormItems: (modal: UseModal<string>) =>
      createModalForm([
        {
          type: 'input',
          formItemProps: {
            name: 'roleName',
            label: t('NAME'),
            rules: [{ required: true }]
          }
        },
        {
          type: 'input',
          formItemProps: {
            name: 'roleAlias',
            label: t('ALIAS'),
            rules: [{ required: true }]
          }
        },
        {
          type: 'tree-select',
          formItemProps: {
            name: 'tenantId',
            label: t('TENANT')
          },
          treeSelectProps: {
            treeData: selectData.map((i) => ({
              title: i.tenantName,
              value: i.tenantId,
              key: i.tenantId
            }))
          },
          hidden: !modal.isRead
        },
        {
          type: 'tree-select',
          formItemProps: {
            name: 'parentId',
            label: t('PARENT.ROLE.NAME')
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
        }
      ])
  }
}
