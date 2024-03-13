import { DEPT_TREE_QK, deptQK, DEPTS_QK } from './query-keys'

export const invalidateDeptsQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [DEPTS_QK]
  })

export const invalidateDeptQuery = (id?: string) =>
  queryClient.invalidateQueries({
    queryKey: deptQK(id),
    refetchType: 'all'
  })

export const invalidateDeptTreeQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [DEPT_TREE_QK]
  })
