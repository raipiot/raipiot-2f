import type { Page } from '../../types'

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

export type ParamsVo = Page<ParamVo>
