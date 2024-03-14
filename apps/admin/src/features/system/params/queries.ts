import type { ParamPageDto } from '@raipiot-2f/api'

import { paramQK, paramsQK } from './query-keys'

export const paramQueryOptions = (id: string) =>
  queryOptions({
    queryKey: paramQK(id),
    queryFn: ({ signal }) => paramsAPI.detail(id, signal)
  })

export const paramsQueryOptions = (params: ParamPageDto) =>
  queryOptions({
    queryKey: paramsQK(params),
    queryFn: ({ signal }) => paramsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })
