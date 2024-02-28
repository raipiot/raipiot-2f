import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { ParamPageDto, ParamsSubmitDto } from './dto'
import type { ParamsVo } from './vo'

export class SystemParamsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/param`
  }

  list(params: ParamPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<ParamsVo>(`${this.#API_PREFIX}/list`, params, {
      signal
    })
  }

  submit(params: ParamsSubmitDto) {
    return this.httpRequest.post<ParamsVo>(`${this.#API_PREFIX}/submit`, params)
  }

  remove(id: string) {
    return this.httpRequest.post(`${this.#API_PREFIX}/remove/${id}`)
  }
}
