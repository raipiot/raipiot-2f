import type { DeptsDto } from '@raipiot-2f/api'

import { deptQK, deptsQK, deptTreeQK } from './query-keys'

export const detailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: deptQK(id),
    queryFn: ({ signal }) => deptsAPI.detail(id, signal)
  })

export const listQueryOptions = (params?: DeptsDto) =>
  queryOptions({
    queryKey: deptsQK(params),
    queryFn: ({ signal }) => deptsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const treeQueryOptions = () =>
  queryOptions({
    queryKey: deptTreeQK(),
    queryFn: ({ signal }) => deptsAPI.tree(signal),
    placeholderData: keepPreviousData
  })
