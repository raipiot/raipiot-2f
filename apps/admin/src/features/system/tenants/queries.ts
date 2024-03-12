import type { SystemDictPageDto } from '@raipiot-2f/api'

import { tenantQK, tenantsQK } from './query-keys'

export const tenantQueryOptions = (id: string) =>
  queryOptions({
    queryKey: tenantQK(id),
    queryFn: ({ signal }) => tenantsAPI.detail(id, signal)
  })

export const tenantsQueryOptions = (params: SystemDictPageDto) =>
  queryOptions({
    queryKey: tenantsQK(params),
    queryFn: ({ signal }) => tenantsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })
