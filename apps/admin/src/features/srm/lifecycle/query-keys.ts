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

// 供应商信息
export const SUPPLIER_INFO_QK = 'srm:life-cycle:supplier-info'
export const supplierInfoQK = (params: { supplierId: string }) => [SUPPLIER_INFO_QK, params]

/**
 * 根据申请编号获取数据
 */
const APPLY_INFO_QK = 'srm:life-cycle:apply-info'
export const applyInfoQK = (params: { applyCode: string }) => [APPLY_INFO_QK, params]
