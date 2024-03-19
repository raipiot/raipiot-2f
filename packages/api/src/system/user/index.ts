import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type {
  UpdatePasswordDto,
  UserBriefListDto,
  UserListDto,
  UserPageDto,
  UserPlatformSubmitDto,
  UserSubmitDto
} from './dto'
import type { UserBriefVo, UsersVo, UserVo } from './vo'

export * from './dto'
export * from './vo'

export class UsersAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/user`
  }

  /**
   * 分页列表
   */
  async page(params: UserPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<UsersVo>(`${this.#API_PREFIX}/page`, params, {
      signal
    })
  }

  /**
   *列表
   */
  async list(params: UserListDto) {
    return this.httpRequest.get<UserVo[]>(`${this.#API_PREFIX}/user-list`, params)
  }

  /**
   * 用列表模糊查询
   */
  async userBriefList(params: UserBriefListDto) {
    return this.httpRequest.get<UserBriefVo[]>(`${this.#API_PREFIX}/list-user-brief`, params)
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<UserVo>(`${this.#API_PREFIX}/detail`, { id }, { signal })
  }

  /**
   * 当前用户信息
   */
  async info(signal?: AbortSignal) {
    return this.httpRequest.get<UserVo>(`${this.#API_PREFIX}/info`, {}, { signal })
  }

  /**
   * 平台详情
   */
  async platformDetail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<UserVo>(`${this.#API_PREFIX}/platform-detail`, { id }, { signal })
  }

  /**
   * 配置平台信息
   */
  async updatePlatform(data: UserPlatformSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-platform`, data)
  }

  /**
   * 修改基本信息
   */
  async updateInfo(data: UserSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-info`, data)
  }

  /**
   * 修改
   */
  async update(data: UserSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update`, data)
  }

  /**
   * 提交
   */
  async submit(data: UserSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/submit`, data)
  }

  /**
   * 重置密码
   */
  async resetPassword(userIds: string) {
    return this.httpRequest.post(
      `${this.#API_PREFIX}/reset-password`,
      {},
      {
        params: { userIds }
      }
    )
  }

  /**
   * 修改密码
   */
  async updatePassword(params: UpdatePasswordDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-password`, {}, { params })
  }

  /**
   * 解封
   */
  async unlock(userIds: string) {
    return this.httpRequest.post(
      `${this.#API_PREFIX}/unlock`,
      {},
      {
        params: { userIds }
      }
    )
  }

  /**
   * 导入
   */
  async importUser(data: File, isCovered: boolean) {
    const formData = new FormData()
    formData.append('file', data)
    return this.httpRequest.post(`${this.#API_PREFIX}/import-user`, formData, {
      params: {
        isCovered: isCovered ? 0 : 1
      }
    })
  }

  /**
   * 导入模版
   */
  async exportTemplate() {
    return this.httpRequest.get(`${this.#API_PREFIX}/export-template`)
  }

  /**
   * 导出
   */
  async exportUser(params: UserPageDto) {
    return this.httpRequest.get(`${this.#API_PREFIX}/export-user`, params)
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
}
