import type { DictPageDto } from '@raipiot-2f/api'

import { systemDictsQK } from './query-keys'

export const systemDictsQueryOptions = (params: DictPageDto) =>
  queryOptions({
    queryKey: systemDictsQK(params),
    queryFn: ({ signal }) => systemDictsAPI.parentList(params, signal),
    placeholderData: keepPreviousData
  })

export const useSystemDictsQuery = (params: DictPageDto) =>
  useQuery(systemDictsQueryOptions(params))

export const useSystemDictsSuspenseQuery = (params: DictPageDto) =>
  useSuspenseQuery(systemDictsQueryOptions(params))
