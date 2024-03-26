import {
  addressDetailQK,
  attachmentDetailQK,
  bankDetailQK,
  contactDetailQK,
  detailQK,
  financeDetailQK,
  invoiceDetailQK,
  LIST_QK
} from './query-keys'

export const invalidateListQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [LIST_QK]
  })

export const invalidateDetailQuery = (id: string) =>
  Promise.allSettled(
    [
      detailQK(id),
      contactDetailQK(id),
      addressDetailQK(id),
      bankDetailQK(id),
      invoiceDetailQK(id),
      financeDetailQK(id),
      attachmentDetailQK(id)
    ].map((queryKey) =>
      queryClient.invalidateQueries({
        queryKey,
        refetchType: 'all'
      })
    )
  )
