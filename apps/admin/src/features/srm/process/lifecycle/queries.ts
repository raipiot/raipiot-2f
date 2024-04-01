import { listQK } from './query-keys'
import type { LifecycleSearchFormModel } from './types'

export const listQO = (params: LifecycleSearchFormModel) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => lifecycleAPI.list(params, signal),
    placeholderData: keepPreviousData
  })
