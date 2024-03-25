import type { PageDto } from '../..'

export interface SupplierPageDto extends PageDto {
  queryDimension?: string
  companyName?: string
  baseId?: string
  lifecycleStageList?: string[]
  material?: string
  categoryState?: string
}

export interface SupplierBlackListPageDto extends PageDto {
  companyName?: string
  reason?: string
}
