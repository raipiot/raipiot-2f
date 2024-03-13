import { tenantsQueryOptions } from '../../tenants'
import type { DeptsSearchFormModel } from '../types'

export const useDeptsSearchForm = () => {
  const { t } = useTranslation('SYSTEM/DEPTS')
  const { createSearchForm } = useFormCreator<DeptsSearchFormModel>()
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
