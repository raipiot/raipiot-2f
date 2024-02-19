import { httpRequest } from '@/axios'

import type { UserVo } from './users.type'

export class UsersAPI {
  static #API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/raipiot-system/user`

  /**
   * 当前用户
   */
  static async info() {
    return httpRequest.get<UserVo>(`${this.#API_PREFIX}/info`)
  }
}
