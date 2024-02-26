import type HttpRequest from '@raipiot-2f/axios'
import { GlobalEnvConfig } from '@raipiot-2f/config'

export class BaseAPI {
  /**
   * Axios 请求实例
   */
  httpRequest: HttpRequest

  #BASE_API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}`

  #MOCK_API_PREFIX = `${GlobalEnvConfig.MOCK_API_PREFIX}`

  constructor(httpRequest: HttpRequest) {
    this.httpRequest = httpRequest
  }

  protected get BASE_API_PREFIX() {
    return this.#BASE_API_PREFIX
  }

  protected get MOCK_API_PREFIX() {
    return this.#MOCK_API_PREFIX
  }
}
