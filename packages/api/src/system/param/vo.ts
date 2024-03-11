import type { Page } from '../../types'

export interface ParamVo {
  /**
   * 创建部门
   */
  createDept?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  createUser?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 参数键
   */
  paramKey?: string
  /**
   * 参数名
   */
  paramName?: string
  /**
   * 参数值
   */
  paramValue?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 业务状态
   */
  status?: number
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 更新人
   */
  updateUser?: string
}

export type ParamsVo = Page<ParamVo>
