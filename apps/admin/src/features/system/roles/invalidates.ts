import { ROLE_TREE_QK, roleQK, ROLES_QK } from './query-keys'

export const invalidateListQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [ROLES_QK]
  })

export const invalidateDetailQuery = (id?: string) =>
  queryClient.invalidateQueries({
    queryKey: roleQK(id),
    refetchType: 'all'
  })

export const invalidateTreeQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [ROLE_TREE_QK]
  })
