import { userInfoQK } from './query-keys'

export const userInfoQueryOptions = queryOptions({
  queryKey: userInfoQK,
  queryFn: () => usersAPI.info()
})

export const useUserInfoQuery = () => useQuery(userInfoQueryOptions)

export const useUserInfoSuspenseQuery = () => useSuspenseQuery(userInfoQueryOptions)
