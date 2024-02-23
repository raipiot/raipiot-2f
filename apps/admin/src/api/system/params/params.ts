import { httpRequest } from '@/axios'

import type { ParamsPageDto, ParamsSubmitDto } from './params.dto'
import type { ParamsVo } from './params.vo'

/**
 * API class for handling system parameters.
 */
export class SystemParamsAPI {
  static #API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/raipiot-system/param`

  static #MOCK_API_PREFIX = `${GlobalEnvConfig.MOCK_API_PREFIX}/param`

  // 接口如下
  static list(params: ParamsPageDto, signal?: AbortSignal) {
    return httpRequest
      .get<ParamsVo>(`${SystemParamsAPI.#API_PREFIX}/list`, params, {
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

  static submit(params: ParamsSubmitDto) {
    return httpRequest.post<ParamsVo>(`${this.#API_PREFIX}/submit`, params)
  }

  static remove(id: string) {
    return httpRequest.post(`${this.#API_PREFIX}/remove/${id}`)
  }
}
