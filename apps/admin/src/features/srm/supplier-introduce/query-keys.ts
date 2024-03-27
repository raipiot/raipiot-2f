import type { SupplierIntroPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:supplier-introduce:list'

export const DETAIL_QK = 'srm:supplier-introduce:detail'

export const listQK = (params?: SupplierIntroPageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]
