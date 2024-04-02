import type { LocalSupplierPageDto, SupplierPageDto } from '@raipiot-2f/api'

import {
  addressDetailQK,
  bankDetailQK,
  contactDetailQK,
  detailQK,
  listQK,
  localDetailQK,
  localListQK
} from './query-keys'

export const listQO = (params: SupplierPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => suppliersAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => suppliersAPI.detail(id, signal)
  })

export const contactDetailQO = (id: string) =>
  queryOptions({
    queryKey: contactDetailQK(id),
    queryFn: ({ signal }) => suppliersAPI.contactDetail(id, signal)
  })

export const addressDetailQO = (id: string) =>
  queryOptions({
    queryKey: addressDetailQK(id),
    queryFn: ({ signal }) => suppliersAPI.addressDetail(id, signal)
  })

export const bankDetailQO = (id: string) =>
  queryOptions({
    queryKey: bankDetailQK(id),
    queryFn: ({ signal }) => suppliersAPI.bankDetail(id, signal)
  })

export const invoiceDetailQO = (id: string) =>
  queryOptions({
    queryKey: bankDetailQK(id),
    queryFn: ({ signal }) => suppliersAPI.bankDetail(id, signal)
  })

export const financeDetailQO = (id: string) =>
  queryOptions({
    queryKey: bankDetailQK(id),
    queryFn: ({ signal }) => suppliersAPI.bankDetail(id, signal)
  })

export const attachmentDetailQO = (id: string) =>
  queryOptions({
    queryKey: bankDetailQK(id),
    queryFn: ({ signal }) => suppliersAPI.bankDetail(id, signal)
  })

export const localListQO = (params: LocalSupplierPageDto) =>
  queryOptions({
    queryKey: localListQK(params),
    queryFn: ({ signal }) => localSuppliersAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const localDetailQO = (id: string) =>
  queryOptions({
    queryKey: localDetailQK(id),
    queryFn: ({ signal }) => localSuppliersAPI.detail(id, signal)
  })
