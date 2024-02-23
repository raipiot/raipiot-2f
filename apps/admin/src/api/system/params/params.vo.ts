import type { Page } from '@/api/common.type'

export interface ParamVo {
  id?: string
  createUser?: string
  createDept?: string
  createTime?: string
  updateUser?: string
  updateTime?: string
  status?: number
  isDeleted?: number
  paramName?: string
  paramKey?: string
  paramValue?: string
  remark?: string
}

// 导出一个基于 ParamVo 的 key 的同名键值对对象
export const ParamVoDataIndex = createRecord<ParamVo>()

export type ParamsVo = Page<ParamVo>
