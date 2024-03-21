import type { ResourcePoolPlanPageDto } from '@raipiot-2f/api'

import { detailQK, listQK } from './query-keys'

export const listQO = (params: ResourcePoolPlanPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => resourcePoolPlansAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => resourcePoolPlansAPI.detail(id, signal)
  })
