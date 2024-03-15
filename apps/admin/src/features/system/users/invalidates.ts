import { detailQK, LIST_QK, platformDetailQK } from './query-keys'

export const invalidateListQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [LIST_QK]
  })

export const invalidateDetailQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: detailQK(id),
    refetchType: 'all'
  })

export const invalidatePlatformDetailQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: platformDetailQK(id),
    refetchType: 'all'
  })
