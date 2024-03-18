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

export const treeQueryOptions = () =>
  queryOptions({
    queryKey: roleTreeQK(),
    queryFn: ({ signal }) => rolesAPI.tree(signal),
    placeholderData: keepPreviousData
  })
