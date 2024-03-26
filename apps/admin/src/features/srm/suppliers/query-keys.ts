import type { SupplierPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:suppliers:list'

export const listQK = (params: SupplierPageDto) => [LIST_QK, params]
