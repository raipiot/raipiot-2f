import type { LifecycleSearchFormModel } from './types'

export const LIST_QK = 'srm:life-cycle:list'

export const listQK = (params?: LifecycleSearchFormModel) => [LIST_QK, params]
