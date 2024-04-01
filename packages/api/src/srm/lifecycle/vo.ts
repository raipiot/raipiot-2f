/**
 * 生命周期列表
 * LifecycleSupplierDTO
 */
export interface LifecycleSupplierVo {
  /**
   * 生命阶段
   */
  lifeStage?: string
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 组织名称/基地名称
   */
  organizationName?: string
  /**
   * 升降级状态
   */
  relegationStatus?: string
  /**
   * 策略负责人
   */
  strategyManager?: string
  /**
   * 供应商编码
   */
  supplierCode?: number
  /**
   * 供应商id
   */
  supplierId?: number
  /**
   * 供应商名称
   */
  supplierName?: string
  /**
   * 目标阶段
   */
  targetStage?: string
  [property: string]: any
}

/**
 * 申请表查询列表
 */
export interface LifecycleSupplierApplyVO {
  /**
   * 附件id
   */
  annexIds?: string
  /**
   * 申请单号
   */
  applyCode?: string
  /**
   * 公司名称
   */
  companyName?: string
  /**
   * 创建部门
   */
  createDepartment?: string
  /**
   * 创建时间
   */
  createDTime?: Date
  /**
   * 创建人
   */
  creatorName?: string
  /**
   * 当前阶段
   */
  currentStage?: string
  /**
   * 说明
   */
  description?: string
  /**
   * 等级
   */
  grade?: string
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 得分
   */
  score?: number
  /**
   * 评分要素（评分模板）
   */
  scoreTemplate?: string
  /**
   * 评分要素（评分模板）id
   */
  scoreTemplateId?: number
  /**
   * 状态
   */
  status?: string
  /**
   * 供应商编码
   */
  supplierCode?: string
  /**
   * 供应商id
   */
  supplierId?: number
  /**
   * 供应商名称
   */
  supplierIName?: string
  /**
   * 目标阶段
   */
  targetStage?: string
  [property: string]: any
}
