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
