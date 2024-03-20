import type { LazyMenuPageDto } from '@raipiot-2f/api'

import { lazyMenuListQK, menuQK, menusQK, menuTreeQK } from './query-keys'

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

export const lazyMenuListQO = (params?: LazyMenuPageDto) =>
  queryOptions({
    queryKey: lazyMenuListQK(params),
    queryFn: ({ signal }) => menusAPI.lazyMenuList(params, signal),
    placeholderData: keepPreviousData
  })
