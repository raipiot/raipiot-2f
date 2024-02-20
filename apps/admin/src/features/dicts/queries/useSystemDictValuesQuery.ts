import { systemDictValuesQK } from './query-keys'

export const systemDictValuesQueryOptions = queryOptions({
  queryKey: systemDictValuesQK,
  queryFn: () => SystemDictAPI.childList()
})

export const useSystemDictValuesQuery = () => useQuery(systemDictValuesQueryOptions)

export const useSystemDictValuesSuspenseQuery = () => useSuspenseQuery(systemDictValuesQueryOptions)
