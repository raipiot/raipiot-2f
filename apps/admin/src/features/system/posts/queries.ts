import type { PostPageDto } from '@raipiot-2f/api'

import { postQK, postSelectQK, postsQK } from './query-keys'

export const postQueryOptions = (id: string) =>
  queryOptions({
    queryKey: postQK(id),
    queryFn: ({ signal }) => postsAPI.detail(id, signal)
  })

export const postsQueryOptions = (params: PostPageDto) =>
  queryOptions({
    queryKey: postsQK(params),
    queryFn: ({ signal }) => postsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const postSelectQueryOptions = (tenantId: string) =>
  queryOptions({
    queryKey: postSelectQK(tenantId),
    queryFn: ({ signal }) => postsAPI.select(tenantId, signal)
  })
