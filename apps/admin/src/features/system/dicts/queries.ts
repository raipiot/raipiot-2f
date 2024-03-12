import type { SystemDictPageDto, SystemDictValuePageDto } from '@raipiot-2f/api'

import { systemDictQK, systemDictsQK, systemDictValuesQK } from './query-keys'

export const systemDictQueryOptions = (id: string) =>
  queryOptions({
    queryKey: systemDictQK(id),
    queryFn: ({ signal }) => systemDictsAPI.detail(id, signal)
  })

export const systemDictsQueryOptions = (params: SystemDictPageDto) =>
  queryOptions({
    queryKey: systemDictsQK(params),
    queryFn: ({ signal }) => systemDictsAPI.parentList(params, signal),
    placeholderData: keepPreviousData
  })

export const systemDictValuesQueryOptions = (params: SystemDictValuePageDto) =>
  queryOptions({
    queryKey: systemDictValuesQK(params),
    queryFn: ({ signal }) => systemDictsAPI.childList(params, signal),
    placeholderData: keepPreviousData
  })
