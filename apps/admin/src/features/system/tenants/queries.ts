import type { TenantPageDto, TenantSelectDto } from '@raipiot-2f/api'

import { tenantQK, tenantsQK, tenantsSelectQK } from './query-keys'

export const tenantQueryOptions = (id: string) =>
  queryOptions({
    queryKey: tenantQK(id),
    queryFn: ({ signal }) => tenantsAPI.detail(id, signal)
  })

export const tenantsQueryOptions = (params: TenantPageDto) =>
  queryOptions({
    queryKey: tenantsQK(params),
    queryFn: ({ signal }) => tenantsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const tenantsSelectQueryOptions = (params?: TenantSelectDto) =>
  queryOptions({
    queryKey: tenantsSelectQK(params),
    queryFn: ({ signal }) => tenantsAPI.select(params, signal),
    placeholderData: keepPreviousData
  })
