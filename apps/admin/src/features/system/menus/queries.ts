import type { LazyMenuPageDto } from '@raipiot-2f/api'

import { menuQK, menusQK, menuTreeQK } from './query-keys'

export const menuQueryOptions = (id: string) =>
  queryOptions({
    queryKey: menuQK(id),
    queryFn: ({ signal }) => menusAPI.detail(id, signal)
  })

export const menusQueryOptions = (params: LazyMenuPageDto) =>
  queryOptions({
    queryKey: menusQK(params),
    queryFn: ({ signal }) => menusAPI.lazyList(params, signal),
    placeholderData: keepPreviousData
  })

export const menuTreeQueryOptions = () =>
  queryOptions({
    queryKey: menuTreeQK(),
    queryFn: ({ signal }) => menusAPI.tree(signal)
  })
