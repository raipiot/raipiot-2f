import type { UserPageDto } from '@raipiot-2f/api'

import { userInfoQK, userQK, usersQK } from './query-keys'

export const userInfoQueryOptions = () =>
  queryOptions({
    queryKey: userInfoQK(),
    queryFn: ({ signal }) => usersAPI.info(signal)
  })

export const userQueryOptions = (id: string) =>
  queryOptions({
    queryKey: userQK(id),
    queryFn: ({ signal }) => usersAPI.detail(id, signal)
  })

export const usersQueryOptions = (params: UserPageDto) =>
  queryOptions({
    queryKey: usersQK(params),
    queryFn: ({ signal }) => usersAPI.page(params, signal),
    placeholderData: keepPreviousData
  })
