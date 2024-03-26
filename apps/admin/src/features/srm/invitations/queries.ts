import type { InvitationPageDto } from '@raipiot-2f/api'

import { detailQK, listQK } from './query-keys'

export const listQO = (params: InvitationPageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => invitationsAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => invitationsAPI.detail(id, signal),
    placeholderData: keepPreviousData
  })
