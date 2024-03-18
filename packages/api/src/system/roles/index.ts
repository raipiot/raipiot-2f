import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { PermissionsSubmitDto, RolesDto, RolesSubmitDto } from './dto'
import type { RoleVo } from './vo'

export * from './dto'
export * from './vo'

export class RolesAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/role`
  }

  /**
   * 获取
   */
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<RoleVo>(
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
  async list(params?: RolesDto, signal?: AbortSignal) {
    return this.httpRequest.get<RoleVo[]>(`${this.#API_PREFIX}/list`, params, {
      signal
    })
  }

  /**
   * 提交
   */
  async submit(data: RolesSubmitDto) {
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

  async tree(signal?: AbortSignal) {
    return this.httpRequest.get<RoleVo[]>(`${this.#API_PREFIX}/tree`, undefined, {
      signal
    })
  }

  /**
   * 更新角色权限
   */
  async grant(data: PermissionsSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/grant`, data)
  }
}
