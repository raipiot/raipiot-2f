import type { LifecycleStage, PageDateDto, PageDto } from '../..'

export interface CurrentStatus {}

export interface LifecycleSupplierListDto extends PageDateDto, PageDto {
  currentStage?: LifecycleStage
  keyword?: string
  targetStage?: string
}
