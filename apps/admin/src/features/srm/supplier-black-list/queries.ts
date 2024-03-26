import type { SupplierBlackListPageDto } from '@raipiot-2f/api'

import { listQK } from './query-keys'

export const listQO = (params: SupplierBlackListPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => suppliersAPI.backlist(params, signal),
    placeholderData: keepPreviousData
  })
