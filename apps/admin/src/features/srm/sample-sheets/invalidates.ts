import { SAMPLE_SHEETS_QK } from './query-keys'

export const invalidates = {
  list: () =>
    queryClient.invalidateQueries({
      queryKey: [SAMPLE_SHEETS_QK],
      type: 'active'
    })
}
