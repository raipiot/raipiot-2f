import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { ParamPageDto, ParamsSubmitDto } from './dto'
import type { ParamsVo } from './vo'

export class SystemParamsAPI extends BaseAPI {
  #API_PREFIX: string

  #MOCK_API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/param`
    this.#MOCK_API_PREFIX = `${this.MOCK_API_PREFIX}/param`
  }

  // 接口如下
  list(params: ParamPageDto, signal?: AbortSignal) {
    return this.httpRequest
      .get<ParamsVo>(`${this.#MOCK_API_PREFIX}/list`, params, {
        signal
      })
      .then((res) => ({
        ...res,
        total: 100,
        records: Array.from({ length: 100 }, (_, idx) => ({
          ...res.records[0],
          id: idx.toString()
        }))
      }))
  }

  submit(params: ParamsSubmitDto) {
    return this.httpRequest.post<ParamsVo>(`${this.#API_PREFIX}/submit`, params)
  }

  remove(id: string) {
    return this.httpRequest.post(`${this.#API_PREFIX}/remove/${id}`)
  }
}
