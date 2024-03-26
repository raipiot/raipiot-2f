import type { SupplierEntryPageDto } from '@raipiot-2f/api'

import { listQK } from './query-keys'

export const listQO = (params: SupplierEntryPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => suppliersAPI.entryList(params, signal),
    placeholderData: keepPreviousData
  })
