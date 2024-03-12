import type { PostPageDto } from '@raipiot-2f/api'

import { postQK, postsQK } from './query-keys'

export const postQueryOptions = (id: string) =>
  queryOptions({
    queryKey: postQK(id),
    queryFn: ({ signal }) => systemPostsAPI.detail(id, signal)
  })

export const postsQueryOptions = (params: PostPageDto) =>
  queryOptions({
    queryKey: postsQK(params),
    queryFn: ({ signal }) => systemPostsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })
