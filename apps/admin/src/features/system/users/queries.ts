import type { UserPageDto } from '@raipiot-2f/api'

import { detailQK, infoQK, listQK, platformDetailQK } from './query-keys'

export const infoQueryOptions = () =>
  queryOptions({
    queryKey: infoQK(),
    queryFn: ({ signal }) => usersAPI.info(signal)
  })

export const detailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => usersAPI.detail(id, signal)
  })

export const listQueryOptions = (params: UserPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => usersAPI.page(params, signal),
    placeholderData: keepPreviousData
  })

export const platformDetailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: platformDetailQK(id),
    queryFn: ({ signal }) => usersAPI.platformDetail(id, signal)
  })
