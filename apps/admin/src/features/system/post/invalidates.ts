import { POSTS_QK, postQK } from './query-keys'

export const invalidatePostsQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [POSTS_QK]
  })

export const invalidatePostQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: postQK(id),
    refetchType: 'all'
  })
