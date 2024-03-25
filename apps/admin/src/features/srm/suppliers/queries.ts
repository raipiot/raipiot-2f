import type { SupplierPageDto } from '@raipiot-2f/api'

import { listQK } from './query-keys'

export const listQO = (params: SupplierPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => suppliersAPI.list(params, signal),
    placeholderData: keepPreviousData
  })
