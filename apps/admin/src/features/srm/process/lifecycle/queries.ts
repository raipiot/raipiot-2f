import { applicationFormListQK, listQK } from './query-keys'
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
