import { tenantQK, TENANTS_QK } from './query-keys'

export const invalidateTenantsQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [TENANTS_QK]
  })

export const invalidateTenantQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: tenantQK(id),
    refetchType: 'all'
  })
