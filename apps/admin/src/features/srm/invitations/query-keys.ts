import type { InvitationPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:invitations:list'

export const DETAIL_QK = 'srm:invitations:detail'

export const listQK = (params: InvitationPageDto) => [LIST_QK, params]

export const detailQK = (id: string) => [DETAIL_QK, id]
