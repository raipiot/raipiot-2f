import { systemDictQK } from './query-keys'

export const systemDictQueryOptions = (id: string) =>
  queryOptions({
    queryKey: systemDictQK(id),
    queryFn: () => systemDictsAPI.detail(id)
  })

export const useSystemDictQuery = (id: string) => useQuery(systemDictQueryOptions(id))

export const useSystemDictSuspenseQuery = (id: string) =>
  useSuspenseQuery(systemDictQueryOptions(id))
