import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { ScopePageDto, ScopeSubmitDto } from './dto'
import type { ScopesVo, ScopeVo } from './vo'

export * from './dto'
export * from './vo'

type Scope = 'data' | 'api'

export class ScopesAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system`
  }

  /**
   * 获取
   */
  async detail(id: string, apiPrefix: Scope = 'api', signal?: AbortSignal) {
    return this.httpRequest.get<ScopeVo>(
      `${this.#API_PREFIX}/${apiPrefix}/detail`,
      { id },
      {
        signal
      }
    )
  }

  /**
   * 列表
   */
  async list(params?: ScopePageDto, apiPrefix: Scope = 'api', signal?: AbortSignal) {
    return this.httpRequest.get<ScopesVo>(`${this.#API_PREFIX}/${apiPrefix}-scope/list`, params, {
      signal
    })
  }

  /**
   * 提交
   */
  async submit(data: ScopeSubmitDto, apiPrefix: Scope = 'api') {
    return this.httpRequest.post(`${this.#API_PREFIX}/${apiPrefix}/submit`, data)
  }

  /**
   * 删除
   */
  async remove(ids: string, apiPrefix: Scope = 'api') {
    return this.httpRequest.post(
      `${this.#API_PREFIX}/${apiPrefix}/remove`,
      {},
      {
        params: {
          ids
        }
      }
    )
  }
}
