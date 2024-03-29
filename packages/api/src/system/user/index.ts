import type HttpRequest from '@raipiot-2f/axios'
import { DateUtils, FormatUtils } from '@raipiot-infra/utils'

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
    const rawData = await this.httpRequest.get<UserVo>(
      `${this.#API_PREFIX}/detail`,
      { id },
      { signal }
    )
    const result = FormatUtils.stringToArrayFieldByKeys(rawData, ['roleId', 'deptId', 'postId'], {
      filter: (v) => v !== ''
    })
    return result
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
    const newObject = FormatUtils.arrayFieldToString(data)
    newObject.birthday = DateUtils.dayjs(data.birthday).format('YYYY-MM-DD HH:mm:ss')
    return this.httpRequest.post(`${this.#API_PREFIX}/update`, newObject)
  }

  /**
   * 提交
   */
  async submit(data: UserSubmitDto) {
    const newObject = FormatUtils.arrayFieldToString(data)
    return this.httpRequest.post(`${this.#API_PREFIX}/submit`, newObject)
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
  async importUser(file: File, isCovered: number) {
    const formData = new FormData()
    formData.append('file', file)
    return this.httpRequest.post(`${this.#API_PREFIX}/import-user`, formData, {
      params: {
        isCovered
      },
      headers: {
        'Content-Type': 'multipart/form-data'
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
  async exportUser() {
    const response = await this.httpRequest.get<Blob>(
      `${this.#API_PREFIX}/export-user`,
      {},
      {
        headers: {
          skipResponseInterceptors: true
        },
        responseType: 'blob'
      }
    )
    return response
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
