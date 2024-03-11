import { paramQK, PARAMS_QK } from './query-keys'

export const invalidateParamsQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [PARAMS_QK]
  })

export const invalidateParamQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: paramQK(id),
    refetchType: 'all'
  })
