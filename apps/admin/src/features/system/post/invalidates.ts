import { POST_VALUES_QK, POSTS_QK, postQK } from './query-keys'

export const invalidatePostsQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [POSTS_QK]
  })

export const invalidatePostValuesQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [POST_VALUES_QK]
  })

export const invalidatePostQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: postQK(id),
    refetchType: 'all'
  })
