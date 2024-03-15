import type { UserPageDto } from '@raipiot-2f/api'

export const INFO_QK = 'system:user-info'

export const LIST_QK = 'system:users'

export const DETAIL_QK = 'system:user'

export const PLATFORM_DETAIL_QK = 'system:user-platform'

export const listQK = (params?: UserPageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]

export const infoQK = () => [INFO_QK]

export const platformDetailQK = (id?: string) => [PLATFORM_DETAIL_QK, { id }]
