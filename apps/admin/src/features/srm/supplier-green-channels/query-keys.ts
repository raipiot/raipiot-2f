import type { LocalSupplierRecordPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:supplier-green-channel:list'

export const DETAIL_QK = 'srm:supplier-green-channel:detail'

export const listQK = (params?: LocalSupplierRecordPageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]
