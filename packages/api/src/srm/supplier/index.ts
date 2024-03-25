import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockList } from '../../mock'
import type { SupplierBlackListPageDto } from './dto'
import type { SupplierInfosVo, SupplierInfoVo } from './vo'

export * from './dto'
export * from './vo'

export class SuppliersAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-srm/local-supplier`
  }

  // 黑名单列表
  async backlist(params: SupplierBlackListPageDto, signal?: AbortSignal) {
    console.log('list', params)
    return mockList<SupplierInfoVo>({
      id: '1',
      erpCode: 'C000111',
      name: '供应商名称',
      joinTime: '2021-09-01 00:00:00',
      reason: '原因',
      invalidTime: '2021-09-01 00:00:00',
      creator: 'admin',
      createTime: '2021-09-01 00:00:00'
    })
    return this.httpRequest.post<SupplierInfosVo>(
      `${this.#API_PREFIX}/list-supplier-black-list-by-page`,
      params,
      {
        signal
      }
    )
  }
}
