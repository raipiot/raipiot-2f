import { userInfoQK } from './query-keys'

export const userInfoQueryOptions = queryOptions({
  queryKey: userInfoQK,
  queryFn: () => UsersAPI.info()
})

export const useUserInfoQuery = () => useQuery(userInfoQueryOptions)

export const useUserInfoSuspenseQuery = () => useSuspenseQuery(userInfoQueryOptions)
