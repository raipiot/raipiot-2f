import type { DictValuePageDto } from '@raipiot-2f/api'

import { systemDictValuesQK } from './query-keys'

export const systemDictValuesQueryOptions = (params: DictValuePageDto) =>
  queryOptions({
    queryKey: systemDictValuesQK(params),
    queryFn: ({ signal }) => systemDictsAPI.childList(params, signal),
    placeholderData: keepPreviousData
  })

export const useSystemDictValuesQuery = (params: DictValuePageDto) =>
  useQuery(systemDictValuesQueryOptions(params))

export const useSystemDictValuesSuspenseQuery = (params: DictValuePageDto) =>
  useSuspenseQuery(systemDictValuesQueryOptions(params))
