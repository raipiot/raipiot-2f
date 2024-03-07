import type { DictPageDto, DictValuePageDto } from '@raipiot-2f/api'

import { systemDictQK, systemDictsQK, systemDictTreeQK, systemDictValuesQK } from './query-keys'

// system:dict
export const systemDictQueryOptions = (id: string) =>
  queryOptions({
    queryKey: systemDictQK(id),
    queryFn: () => systemDictsAPI.detail(id)
  })

export const useSystemDictQuery = (id: string) => useQuery(systemDictQueryOptions(id))

export const useSystemDictSuspenseQuery = (id: string) =>
  useSuspenseQuery(systemDictQueryOptions(id))

export const prefetchSystemDict = (id: string) =>
  queryClient.prefetchQuery(systemDictQueryOptions(id))

// system:dicts
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

export const prefetchSystemDicts = (params: DictPageDto) =>
  queryClient.prefetchQuery(systemDictsQueryOptions(params))

// system:dict-tree
export const systemDictTreeQueryOptions = () =>
  queryOptions({
    queryKey: systemDictTreeQK(),
    queryFn: () => systemDictsAPI.tree()
  })

export const useSystemDictTreeQuery = () => useQuery(systemDictTreeQueryOptions())

export const useSystemDictTreeSuspenseQuery = () => useSuspenseQuery(systemDictTreeQueryOptions())

// 'system:dict-values'
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
