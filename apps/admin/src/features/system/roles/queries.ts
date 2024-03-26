import type { RolesDto } from '@raipiot-2f/api'

import { roleQK, rolesQK, roleTreeQK } from './query-keys'

export const detailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: roleQK(id),
    queryFn: ({ signal }) => rolesAPI.detail(id, signal),
    placeholderData: keepPreviousData
  })

export const listQueryOptions = (params?: RolesDto) =>
  queryOptions({
    queryKey: rolesQK(params),
    queryFn: ({ signal }) => rolesAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const treeQueryOptions = (tenantId?: string) =>
  queryOptions({
    queryKey: roleTreeQK(tenantId),
    queryFn: ({ signal }) => rolesAPI.tree(tenantId, signal),
    placeholderData: keepPreviousData
  })
