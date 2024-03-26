import type { SupplierEntryPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:supplier-entry:list'

export const listQK = (params: SupplierEntryPageDto) => [LIST_QK, params]
