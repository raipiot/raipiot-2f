import { BIZ_DICT_VALUES_QK, BIZ_DICTS_QK, bizDictQK } from './query-keys'

export const invalidateBizDictsQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [BIZ_DICTS_QK]
  })

export const invalidateBizDictValuesQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [BIZ_DICT_VALUES_QK]
  })

export const invalidateBizDictQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: bizDictQK(id),
    refetchType: 'all'
  })
