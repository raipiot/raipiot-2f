import type { SupplierBlackListPageDto } from '@raipiot-2f/api'

export interface SupplierBlackListSearchFormModel
  extends Omit<SupplierBlackListPageDto, 'current' | 'size'> {}
