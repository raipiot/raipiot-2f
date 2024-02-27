import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../base'
import type { PortalInfo } from './dto'

export class PortalAPI extends BaseAPI {
  #API_PREFIX: string

  #API_MOCK_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/portal`
    this.#API_MOCK_PREFIX = `${this.MOCK_API_PREFIX}/portal`
  }

  /**
   * 获取门户页面的接口数据
   * @returns
   */
  info({ signal }: { signal?: AbortSignal }) {
    return this.httpRequest.get<PortalInfo>(`${this.#API_MOCK_PREFIX}/info`, {}, { signal })
  }
}
