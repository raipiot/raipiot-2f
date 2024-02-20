import { systemDictsQK } from './query-keys'

export const systemDictsQueryOptions = queryOptions({
  queryKey: systemDictsQK,
  queryFn: () => SystemDictAPI.parentList()
})

export const useSystemDictsQuery = () => useQuery(systemDictsQueryOptions)

export const useSystemDictsSuspenseQuery = () => useSuspenseQuery(systemDictsQueryOptions)
