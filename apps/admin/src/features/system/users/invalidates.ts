import { userQK, USERS_QK } from './query-keys'

export const invalidateUsersQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [USERS_QK]
  })

export const invalidateUserQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: userQK(id),
    refetchType: 'all'
  })
