import type { SystemDictPageDto, SystemDictSubmitDto } from '@raipiot-2f/api'

export interface SystemDictSearchFormModel extends Pick<SystemDictPageDto, 'code' | 'dictValue'> {}

export interface SystemDictSubmitFormModel extends Omit<SystemDictSubmitDto, 'isSealed'> {
  isSealed?: boolean
  parentName?: string
}

export type SystemDictCode =
  | 'post_category' // 岗位类型
  | 'org_category' // 机构类型
  | 'user_type' // 用户平台
