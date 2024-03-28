import type { LocalSupplierRecordPageDto } from '@raipiot-2f/api'

import { detailQK, listQK } from './query-keys'

export const listQO = (params: LocalSupplierRecordPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => localSuppliersAPI.greenChannelList(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => localSuppliersAPI.greenChannelDetail(id, signal)
  })
