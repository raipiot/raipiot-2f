import type { SupplierBlackListPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:supplier-black-list:list'

export const listQK = (params: SupplierBlackListPageDto) => [LIST_QK, params]
