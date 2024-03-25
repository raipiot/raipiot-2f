import type { PageDto } from '../..'

export interface SupplierBlackListPageDto extends PageDto {
  companyName?: string
  reason?: string
}
