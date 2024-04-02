import type { LifecycleStage, PageDateDto, PageDto } from '../..'

export interface CurrentStatus {}

/**
 * 生命周期供应商列表
 */
export interface LifecycleSupplierListDto extends PageDateDto, PageDto {
  currentStage?: LifecycleStage
  keyword?: string
  targetStage?: string
}

export enum LifecycleSupplierApplyListDtoStatus {
  'NEW' = '1',
  'PENDING' = '2',
  'APPROVED' = '3',
  'REJECTED' = '4'
}

/**
 * 申请记录列表搜索
 */
export interface LifecycleSupplierApplyListDto extends PageDateDto, PageDto {
  keyword?: string
  status?: LifecycleSupplierApplyListDtoStatus
}

/**
 * 更新升降级申请
 * LifecycleSupplierApplyCommand
 */
export interface LifecycleSupplierApplyCommand {
  /**
   * 附件id
   */
  annexIds?: string
  /**
   * 申请编号
   */
  applyCode?: string
  /**
   * 创建部门
   */
  creatorDept?: string
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
  grade?: number
  /**
   * id
   */
  id?: number
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
  scoreTemplateId?: number
  /**
   * 状态
   */
  status?: string
  /**
   * 供应商id
   */
  supplierId?: number
  /**
   * 目标阶段
   */
  targetStage?: string
  [property: string]: any
}
