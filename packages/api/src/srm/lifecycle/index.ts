import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockList } from '../../mock'
import type { LifecycleSupplierListDto } from './dto'
import type { LifecycleSupplierVo } from './vo'

export * from './dto'
export * from './enums'
export * from './vo'

export class LifecycleAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-srm/lifecycle`
  }

  async list(params: LifecycleSupplierListDto, signal?: AbortSignal) {
    return mockList<LifecycleSupplierVo>({
      lifeStage: '生命阶段',
      organizationId: 1,
      organizationName: '组织名称/基地名称',
      relegationStatus: '1',
      strategyManager: '策略负责人',
      supplierCode: 1,
      supplierId: 1,
      supplierName: '供应商名称',
      targetStage: '目标阶段'
    })
    return this.httpRequest.post<LifecycleSupplierVo>(
      `${this.#API_PREFIX}/supplier/list-lifecycle-supplier-by-page`,
      params,
      { signal }
    )
  }
}
