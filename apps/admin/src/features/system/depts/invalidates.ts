import { DEPT_TREE_QK, deptQK, DEPTS_QK } from './query-keys'

export const invalidateListQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [DEPTS_QK]
  })

export const invalidateDetailQuery = (id?: string) =>
  queryClient.invalidateQueries({
    queryKey: deptQK(id),
    refetchType: 'all'
  })

export const invalidateTreeQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [DEPT_TREE_QK]
  })
