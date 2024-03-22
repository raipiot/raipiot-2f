import type {
  ResourcePoolScopeCategoryPageDto,
  ResourcePoolScopeCompanyPageDto,
  ResourcePoolScopePageDto
} from '@raipiot-2f/api'

import { categoryListQK, companyListQK, detailQK, listQK } from './query-keys'

export const listQO = (params: ResourcePoolScopePageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => resourcePoolScopesAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => resourcePoolScopesAPI.detail(id, signal)
  })

export const companyListQO = (params: ResourcePoolScopeCompanyPageDto) =>
  queryOptions({
    queryKey: companyListQK(params),
    queryFn: ({ signal }) => resourcePoolScopesAPI.companyList(params, signal),
    placeholderData: keepPreviousData
  })

export const categoryListQO = (params: ResourcePoolScopeCategoryPageDto) =>
  queryOptions({
    queryKey: categoryListQK(params),
    queryFn: ({ signal }) => resourcePoolScopesAPI.categoryList(params, signal),
    placeholderData: keepPreviousData
  })
