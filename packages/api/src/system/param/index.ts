import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { ParamPageDto, ParamSubmitDto } from './dto'
import type { ParamsVo, ParamVo } from './vo'

export * from './dto'
export * from './vo'

export class ParamsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/param`
  }

  /**
   * 列表
   */
  list(params: ParamPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<ParamsVo>(`${this.#API_PREFIX}/list`, params, {
      signal
    })
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<ParamVo>(`${this.#API_PREFIX}/detail`, { id }, { signal })
  }

  /**
   * 提交
   */
  async submit(data: ParamSubmitDto) {
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
