import { DictPageDto } from '@/api/system/dict/dict.dto'

import { systemDictsQK } from './query-keys'

export const systemDictsQueryOptions = (params: DictPageDto) =>
  queryOptions({
    queryKey: systemDictsQK(params),
    queryFn: ({ signal }) => SystemDictAPI.parentList(new DictPageDto(params), signal),
    placeholderData: keepPreviousData
  })

export const useSystemDictsQuery = (params: DictPageDto) =>
  useQuery(systemDictsQueryOptions(params))

export const useSystemDictsSuspenseQuery = (params: DictPageDto) =>
  useSuspenseQuery(systemDictsQueryOptions(params))
