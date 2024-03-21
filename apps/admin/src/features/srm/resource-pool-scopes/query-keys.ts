import type { ResourcePoolScopePageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:resource-pool-scope:list'

export const DETAIL_QK = 'srm:resource-pool-scope:detail'

export const listQK = (params?: ResourcePoolScopePageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]
