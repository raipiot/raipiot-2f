import { SYSTEM_DICT_VALUES_QK, SYSTEM_DICTS_QK, systemDictQK } from '../queries'

export const invalidateDictsQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [SYSTEM_DICTS_QK]
  })

export const invalidateDictValuesQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [SYSTEM_DICT_VALUES_QK]
  })

export const invalidateDictQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: systemDictQK(id),
    refetchType: 'all'
  })
