import type { SystemDictPageDto, SystemDictValuePageDto } from '@raipiot-2f/api'

import { bizDictQK, bizDictsQK, bizDictValuesQK } from './query-keys'

export const bizDictQueryOptions = (id: string) =>
  queryOptions({
    queryKey: bizDictQK(id),
    queryFn: ({ signal }) => bizDictsAPI.detail(id, signal)
  })

export const bizDictsQueryOptions = (params: SystemDictPageDto) =>
  queryOptions({
    queryKey: bizDictsQK(params),
    queryFn: ({ signal }) => bizDictsAPI.parentList(params, signal),
    placeholderData: keepPreviousData
  })

export const bizDictValuesQueryOptions = (params: SystemDictValuePageDto) =>
  queryOptions({
    queryKey: bizDictValuesQK(params),
    queryFn: ({ signal }) => bizDictsAPI.childList(params, signal),
    placeholderData: keepPreviousData
  })
