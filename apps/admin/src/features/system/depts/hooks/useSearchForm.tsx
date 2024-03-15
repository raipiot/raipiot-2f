import type { DeptsSubmitDto } from '@raipiot-2f/api'

import { tenantsQueryOptions } from '../../tenants'

/**
 * 构建搜索表单
 * @returns
 */
export const useSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DEPTS')
  const { createSearchForm } = useFormCreator<DeptsSubmitDto>()
  const [searchForm] = AForm.useForm()
  const {
    data: { records }
  } = useSuspenseQuery(tenantsQueryOptions({ current: 1, size: 1000 }))

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'input',
        formItemProps: {
          name: 'deptName',
          label: t('NAME')
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'tenantId',
          label: t('TENANT')
        },
        selectProps: {
          options: records.map((i) => ({ label: i.tenantName, value: i.tenantId }))
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'fullName',
          label: t('FULLNAME')
        }
      }
    ])
  }
}
