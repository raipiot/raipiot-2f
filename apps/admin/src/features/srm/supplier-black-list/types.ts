import type { SupplierBlackListPageDto, SupplierPageDto } from '@raipiot-2f/api'

export interface SupplierSearchFormModel extends Omit<SupplierPageDto, 'current' | 'size'> {}

export interface SupplierBlackListSearchFormModel
  extends Omit<SupplierBlackListPageDto, 'current' | 'size'> {}
