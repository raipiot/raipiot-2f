import type { SystemDictConfigPageDto } from '@raipiot-2f/api'

import { listQK } from './query-keys'

export const listQueryOptions = (params: SystemDictConfigPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => systemDictsAPI.childList(params, signal),
    placeholderData: keepPreviousData
  })
