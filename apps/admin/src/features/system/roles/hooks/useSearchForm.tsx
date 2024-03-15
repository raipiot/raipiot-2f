import type { RolesSubmitDto } from '@raipiot-2f/api'

import { tenantsSelectQueryOptions } from '../../tenants'

/**
 * 构建搜索表单
 * @returns
 */
export const useSearchForm = () => {
  const { t } = useTranslation(['SYSTEM/ROLES', 'SYSTEM/DEPTS'])
  const { createSearchForm } = useFormCreator<RolesSubmitDto>()
  const [searchForm] = AForm.useForm()
  const { data } = useSuspenseQuery(tenantsSelectQueryOptions())
  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'roleName',
          label: t('NAME')
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'tenantId',
          label: t('SYSTEM/DEPTS:TENANT')
        },
        selectProps: {
          options: data.map((i) => ({ label: i.tenantName, value: i.tenantId }))
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'roleAlias',
          label: t('ALIAS')
        }
      }
    ])
  }
}
