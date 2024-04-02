import { applicationFormListQK, applyInfoQK, listQK, supplierInfoQK } from './query-keys'
import type { ApplicationFormSearchFormModel, LifecycleSearchFormModel } from './types'

/**
 * 生命周期列表
 * @param params
 * @returns
 */
export const listQO = (params: LifecycleSearchFormModel) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => lifecycleAPI.list(params, signal),
    placeholderData: keepPreviousData
  })

/**
 * 申请表查询列表 - 记录表
 */
export const applicationFormListQO = (params: ApplicationFormSearchFormModel) =>
  queryOptions({
    queryKey: applicationFormListQK(params),
    queryFn: ({ signal }) => lifecycleAPI.applicationFormList(params, signal),
    placeholderData: keepPreviousData
  })

/**
 * 基于供应商 id 获取信息
 */
export const supplierInfoQO = (params: { supplierId: string }) =>
  queryOptions({
    queryKey: supplierInfoQK(params),
    queryFn: ({ signal }) => lifecycleAPI.supplierInfo(params, signal),
    placeholderData: keepPreviousData
  })

/**
 * 根据申请编号获取数据
 */
export const applyInfoQO = (params: { applyCode: string }) =>
  queryOptions({
    queryKey: applyInfoQK(params),
    queryFn: ({ signal }) => lifecycleAPI.getApplyInfo(params, signal),
    placeholderData: keepPreviousData
  })
