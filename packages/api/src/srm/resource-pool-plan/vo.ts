import type { Page } from '../..'

export interface ResourcePoolPlanVo {
  /**
   * 品类id
   */
  categoryId?: number
  /**
   * 品类名称
   */
  categoryName?: string
  /**
   * 完成状态
   */
  completionStatusId?: string
  /**
   * 完成状态
   */
  completionStatusName?: string
  /**
   * 创建时间
   */
  createdTime?: Date
  /**
   * 创建用户 ID
   */
  creatorId?: number
  /**
   * 创建用户名
   */
  creatorName?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 启用状态(1-启用 2-禁用)
   */
  enableStateId?: string
  /**
   * 启用状态(1-启用 2-禁用)
   */
  enableStateName?: string
  /**
   * 主键
   */
  id?: number
  /**
   * 会议记录文件id
   */
  meetingFileId?: number
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 计划单号
   */
  planNo?: string
  /**
   * 计划开发数量
   */
  planQuantity?: number
  /**
   * 合格供应商删除数量
   */
  qualifiedDeleteQuantity?: number
  /**
   * 合格供应商数量
   */
  qualifiedQuantity?: number
  /**
   * 资源池id
   */
  resourcePoolId?: number
  /**
   * 资源池名称
   */
  resourcePoolName?: number
  /**
   * 状态
   */
  statusId?: string
  /**
   * 状态
   */
  statusName?: string
  /**
   * 策略负责人
   */
  strategyHeadId?: string
  /**
   * 策略负责人
   */
  strategyHeadName?: string
  /**
   * 目标数量
   */
  targetQuantity?: number
  /**
   * 更新时间
   */
  updatedTime?: Date
  /**
   * 更新用户 ID
   */
  updaterId?: number
  /**
   * 更新用户名
   */
  updaterName?: string
}

export type ResourcePoolPlansVo = Page<ResourcePoolPlanVo>
