import { userInfoQK } from './query-keys'

export const userInfoQueryOptions = () =>
  queryOptions({
    queryKey: userInfoQK(),
    queryFn: () => usersAPI.info()
  })
