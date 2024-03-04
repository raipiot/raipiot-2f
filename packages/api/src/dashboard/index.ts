import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../base'
import type { DashboardDto } from './dto'

export * from './dto'

export class DashboardAPI extends BaseAPI {
  #API_PREFIX: string

  #API_MOCK_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/portal`
    this.#API_MOCK_PREFIX = `${this.MOCK_API_PREFIX}/portal`
  }

  // TODO: 待接入接口，再修改逻辑
  info({ signal }: { signal?: AbortSignal }) {
    return this.httpRequest.get<DashboardDto>(
      `${this.#API_MOCK_PREFIX}/info`,
      {},
      {
        signal
      }
    )
  }
}
