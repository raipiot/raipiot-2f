import type { SupplierEntryCheckSocialCodeDto, SupplierEntryPageDto } from '@raipiot-2f/api'

export interface SupplierEntrySearchFormModel
  extends Omit<SupplierEntryPageDto, 'size' | 'current'> {}

export interface SupplierEntryPreCreateFormModel extends SupplierEntryCheckSocialCodeDto {
  area?: string
}
