import type { ApplicationFormSearchFormModel, LifecycleSearchFormModel } from './types'

export const LIST_QK = 'srm:life-cycle:list'
/**
 * 生命周期列表
 * @param params
 * @returns
 */
export const listQK = (params?: LifecycleSearchFormModel) => [LIST_QK, params]

export const APPLICATION_FORM_QK = 'srm:life-cycle:application-form-list'
/**
 * 申请表查询列表 - 记录表
 */
export const applicationFormListQK = (params: ApplicationFormSearchFormModel) => [
  APPLICATION_FORM_QK,
  params
]
