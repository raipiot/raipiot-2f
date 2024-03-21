import type { ResourcePoolPlanPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:resource-pool-plan:list'

export const DETAIL_QK = 'srm:resource-pool-plan:detail'

export const listQK = (params?: ResourcePoolPlanPageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]
