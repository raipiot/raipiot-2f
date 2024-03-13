import { deptQK, DEPTS_QK } from './query-keys'

export const invalidateDeptsQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [DEPTS_QK]
  })

export const invalidateDeptsQuery = (id?: string) =>
  queryClient.invalidateQueries({
    queryKey: deptQK(id),
    refetchType: 'all'
  })
