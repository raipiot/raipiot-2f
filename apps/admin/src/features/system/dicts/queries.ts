import type { DictPageDto, DictValuePageDto } from '@raipiot-2f/api'

import { systemDictQK, systemDictsQK, systemDictTreeQK, systemDictValuesQK } from './query-keys'

export const systemDictQueryOptions = (id: string) =>
  queryOptions({
    queryKey: systemDictQK(id),
    queryFn: ({ signal }) => systemDictsAPI.detail(id, signal)
  })

export const systemDictsQueryOptions = (params: DictPageDto) =>
  queryOptions({
    queryKey: systemDictsQK(params),
    queryFn: ({ signal }) => systemDictsAPI.parentList(params, signal),
    placeholderData: keepPreviousData
  })

export const systemDictTreeQueryOptions = () =>
  queryOptions({
    queryKey: systemDictTreeQK(),
    queryFn: ({ signal }) => systemDictsAPI.tree(signal)
  })

export const systemDictValuesQueryOptions = (params: DictValuePageDto) =>
  queryOptions({
    queryKey: systemDictValuesQK(params),
    queryFn: ({ signal }) => systemDictsAPI.childList(params, signal),
    placeholderData: keepPreviousData
  })
