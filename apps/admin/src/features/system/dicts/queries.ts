import type { SystemDictPageDto } from '@raipiot-2f/api'

import { detailQK, listQK, treeQK } from './query-keys'
import type { SystemDictCode } from './types'

export const detailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => systemDictsAPI.detail(id, signal)
  })

export const listQueryOptions = (params: SystemDictPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => systemDictsAPI.parentList(params, signal),
    placeholderData: keepPreviousData
  })

export const treeQueryOptions = (code: SystemDictCode) =>
  queryOptions({
    queryKey: treeQK(code),
    queryFn: ({ signal }) => systemDictsAPI.dictionaryTree(code, signal),
    placeholderData: keepPreviousData
  })
