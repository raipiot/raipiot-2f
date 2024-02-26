import type { Page } from '../../types'
import { genType } from '../../utils'

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

export const ParamVoDataIndex = genType<ParamVo>()

export type ParamsVo = Page<ParamVo>
