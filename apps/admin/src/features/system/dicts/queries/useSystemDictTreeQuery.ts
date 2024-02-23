import { systemDictTreeQK } from './query-keys'

export const systemDictTreeQueryOptions = queryOptions({
  queryKey: systemDictTreeQK,
  queryFn: () => SystemDictAPI.tree()
})

export const useSystemDictTreeQuery = () => useQuery(systemDictTreeQueryOptions)

export const useSystemDictTreeSuspenseQuery = () => useSuspenseQuery(systemDictTreeQueryOptions)
