import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { TenantPageDto, TenantSubmitDto } from './dto'
import type { TenantsVo, TenantVo } from './vo'

export * from './dto'
export * from './vo'

export class TenantAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/tenant`
  }

  /**
   * 列表
   */
  list(params: TenantPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<TenantsVo>(`${this.#API_PREFIX}/list`, params, {
      signal
    })
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<TenantVo>(`${this.#API_PREFIX}/detail`, { id }, { signal })
  }

  /**
   * 提交
   */
  async submit(data: TenantSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/submit`, data)
  }

  /**
   * 删除
   */
  async remove(ids: string) {
    return this.httpRequest.post(
      `${this.#API_PREFIX}/remove`,
      {},
      {
        params: {
          ids
        }
      }
    )
  }
}
