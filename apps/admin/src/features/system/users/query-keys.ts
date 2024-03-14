import type { UserPageDto } from '@raipiot-2f/api'

export const USER_INFO_QK = 'system:user-info'

export const USERS_QK = 'system:users'

export const USER_QK = 'system:user'

export const USER_PLATFORM_QK = 'system:user-platform'

export const usersQK = (params?: UserPageDto) => [USERS_QK, params]

export const userQK = (id?: string) => [USER_QK, { id }]

export const userInfoQK = () => [USER_INFO_QK]

export const userPlatformQK = (id?: string) => [USER_PLATFORM_QK, { id }]
