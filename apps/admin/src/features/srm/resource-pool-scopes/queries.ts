import type { ResourcePoolScopePageDto } from '@raipiot-2f/api'

import { detailQK, listQK } from './query-keys'

export const listQO = (params: ResourcePoolScopePageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => resourcePoolScopesAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => resourcePoolScopesAPI.detail(id, signal)
  })
