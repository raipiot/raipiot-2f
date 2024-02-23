import { systemDictQK } from './query-keys'

export const systemDictQueryOptions = queryOptions({
  queryKey: systemDictQK,
  queryFn: () => SystemDictAPI.detail()
})

export const useSystemDictQuery = () => useQuery(systemDictQueryOptions)

export const useSystemDictSuspenseQuery = () => useSuspenseQuery(systemDictQueryOptions)
