import type { SupplierIntroPageDto } from '@raipiot-2f/api'

import { detailQK, listQK } from './query-keys'

export const listQO = (params: SupplierIntroPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => suppliersAPI.introduceList(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => suppliersAPI.introduceDetail(id, signal)
  })
