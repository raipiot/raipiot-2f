import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { DeptsDto, DeptsSubmitDto } from './dto'
import type { DeptTreeVo, DeptVo } from './vo'

export * from './dto'
export * from './vo'

export class DeptsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/dept`
  }

  /**
   * 获取
   */
  detail(id: string, signal: AbortSignal) {
    return this.httpRequest.get<DeptVo>(
      `${this.#API_PREFIX}/detail`,
      { id },
      {
        signal
      }
    )
  }

  /**
   * 列表
   */
  list(params?: DeptsDto, signal?: AbortSignal) {
    return this.httpRequest.get<DeptVo[]>(`${this.#API_PREFIX}/list`, params, {
      signal
    })
  }

  /**
   * 提交
   */
  async submit(data: DeptsSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/submit`, data)
  }

  /**
   * 删除
   */
  remove(ids: string) {
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

  /**
   * 获取树
   */
  tree(signal?: AbortSignal) {
    return this.httpRequest.get<DeptTreeVo[]>(`${this.#API_PREFIX}/tree`, undefined, { signal })
  }
}
