/**
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
