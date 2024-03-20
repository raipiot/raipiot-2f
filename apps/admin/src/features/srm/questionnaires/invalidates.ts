import { detailQK, LIST_QK } from './query-keys'

export const invalidateListQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [LIST_QK]
  })

export const invalidateDetailQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: detailQK(id),
    refetchType: 'all'
  })
