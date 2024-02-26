import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { UserVo } from './vo'

export class UsersAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/user`
  }

  /**
   * 当前用户
   */
  info() {
    return this.httpRequest.get<UserVo>(`${this.#API_PREFIX}/info`)
  }
}
