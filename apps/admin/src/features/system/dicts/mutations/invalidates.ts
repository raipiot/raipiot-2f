import { systemDictsQK, systemDictValuesQK } from '../queries'

export const invalidateDictsQueries = () =>
  queryClient.invalidateQueries({
    predicate: ({ queryKey }) => queryKey.includes(systemDictsQK().at(0)),
    refetchType: 'active'
  })

export const invalidateDictValuesQueries = () =>
  queryClient.invalidateQueries({
    predicate: ({ queryKey }) => queryKey.includes(systemDictValuesQK().at(0)),
    refetchType: 'active'
  })
