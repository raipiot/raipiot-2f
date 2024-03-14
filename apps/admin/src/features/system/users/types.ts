import type { UserPageDto, UserSubmitDto } from '@raipiot-2f/api'

export interface UserSearchFormModel extends Omit<UserPageDto, 'size' | 'current'> {}

export interface UserSubmitFormModel extends UserSubmitDto {}
