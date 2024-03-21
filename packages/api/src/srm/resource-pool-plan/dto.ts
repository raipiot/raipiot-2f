import type { PageDateDto } from '../..'

export interface ResourcePoolPlanPageDto extends PageDateDto {
  /**
   * 状态
   */
  status?: string
  /**
   * 规则类型
   */
  ruleType?: string
  /**
   * 关键字
   */
  keywords?: string
}

export interface ResourcePoolPlanCreateDto {
  /**
   * 品类id
   */
  categoryId: number
  /**
   * 完成状态
   */
  completionStatus?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 启用状态
   */
  enableState?: string
  /**
   * 会议记录文件id
   */
  meetingFileId?: number
  /**
   * 计划开发数量
   */
  planQuantity: number
  /**
   * 合格供应商删除数量
   */
  qualifiedDeleteQuantity: number
  /**
   * 合格供应商数量
   */
  qualifiedQuantity: number
  /**
   * 资源池id
   */
  resourcePoolId: number
  /**
   * 状态
   */
  status?: string
  /**
   * 策略负责人Id
   */
  strategyHeadId: number
  /**
   * 供应商Id集合
   */
  supplierIds?: number[]
  /**
   * 目标数量
   */
  targetQuantity: number
}

export interface ResourcePoolPlanUpdateDto {
  /**
   * 新增供应商Id集合
   */
  addSupplierIds?: number[]
  /**
   * 品类id
   */
  categoryId: number
  /**
   * 完成状态
   */
  completionStatus?: string
  /**
   * 删除供应商Id集合
   */
  deleteSupplierIds?: number[]
  /**
   * 描述
   */
  description?: string
  /**
   * 启用状态
   */
  enableState?: string
  /**
   * 资源池计划id
   */
  id: number
  /**
   * 会议记录文件id
   */
  meetingFileId?: number
  /**
   * 计划开发数量
   */
  planQuantity: number
  /**
   * 合格供应商删除数量
   */
  qualifiedDeleteQuantity: number
  /**
   * 合格供应商数量
   */
  qualifiedQuantity: number
  /**
   * 资源池id
   */
  resourcePoolId: number
  /**
   * 状态
   */
  status?: string
  /**
   * 策略负责人Id
   */
  strategyHeadId: number
  /**
   * 目标数量
   */
  targetQuantity: number
}

export interface ResourcePoolPlanStatusUpdateDto {
  id: string
  status: string
}
