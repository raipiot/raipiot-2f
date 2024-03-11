import { SYSTEM_DICT_VALUES_QK, SYSTEM_DICTS_QK, systemDictQK } from './query-keys'

export const invalidateSystemDictsQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [SYSTEM_DICTS_QK]
  })

export const invalidateSystemDictValuesQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [SYSTEM_DICT_VALUES_QK]
  })

export const invalidateSystemDictQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: systemDictQK(id),
    refetchType: 'all'
  })
