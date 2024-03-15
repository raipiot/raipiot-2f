import type { SystemDictConfigPageDto, SystemDictPageDto } from '@raipiot-2f/api'

import type { BizDictCode } from './enums'
import { bizDictQK, bizDictsQK, bizDictTreeQK, bizDictValuesQK } from './query-keys'

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

export const bizDictValuesQueryOptions = (params: SystemDictConfigPageDto) =>
  queryOptions({
    queryKey: bizDictValuesQK(params),
    queryFn: ({ signal }) => bizDictsAPI.childList(params, signal),
    placeholderData: keepPreviousData
  })

export const bizDictTreeQueryOptions = (code: BizDictCode) =>
  queryOptions({
    queryKey: bizDictTreeQK(code),
    queryFn: ({ signal }) => bizDictsAPI.dictionaryTree(code, signal),
    placeholderData: keepPreviousData
  })
