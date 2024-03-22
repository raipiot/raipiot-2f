import type {
  ResourcePoolScopeCategoryPageDto,
  ResourcePoolScopeCompanyPageDto,
  ResourcePoolScopePageDto
} from '@raipiot-2f/api'

export const LIST_QK = 'srm:resource-pool-scope:list'

export const DETAIL_QK = 'srm:resource-pool-scope:detail'

export const COMPANY_LIST_QK = 'srm:resource-pool-scope:company-list'

export const CATEGORY_LIST_QK = 'srm:resource-pool-scope:category-list'

export const listQK = (params?: ResourcePoolScopePageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]

export const companyListQK = (params?: ResourcePoolScopeCompanyPageDto) => [COMPANY_LIST_QK, params]

export const categoryListQK = (params?: ResourcePoolScopeCategoryPageDto) => [
  CATEGORY_LIST_QK,
  params
]
