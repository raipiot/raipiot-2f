import { LIST_QK } from './query-keys'

export const invalidateListQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [LIST_QK]
  })
