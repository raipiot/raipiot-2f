import type { SystemDictPageDto, SystemDictValuePageDto } from '@raipiot-2f/api'

import type { SystemDictCode } from './enums'
import { systemDictQK, systemDictsQK, systemDictTreeQK, systemDictValuesQK } from './query-keys'

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

export const systemDictTreeQueryOptions = (code: SystemDictCode) =>
  queryOptions({
    queryKey: systemDictTreeQK(code),
    queryFn: ({ signal }) => systemDictsAPI.dictionaryTree(code, signal),
    placeholderData: keepPreviousData
  })
