import type { LocalSupplierPageDto } from '@raipiot-2f/api'

export interface LocalSupplierSearchFormModel
  extends Omit<LocalSupplierPageDto, 'size' | 'current'> {}
