import type { UserPageDto } from '@raipiot-2f/api'

export const USER_INFO_QK = 'user-info'

export const USERS_QK = 'system:users'

export const USER_QK = 'system:user'

export const usersQK = (params?: UserPageDto) => [USERS_QK, params]

export const userQK = (id?: string) => [USER_QK, { id }]

export const userInfoQK = () => [USER_INFO_QK]
