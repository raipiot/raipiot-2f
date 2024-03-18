import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { LazyMenuPageDto, MenuSubmitDto } from './dto'
import type { GrantTreeVO, MenuVo } from './vo'

export * from './dto'
export * from './vo'

export class MenusAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/menu`
  }

  /**
   * 懒加载列表
   */
  async lazyList(params: LazyMenuPageDto, signal?: AbortSignal) {
    const res = await this.httpRequest.get<MenuVo[]>(`${this.#API_PREFIX}/lazy-list`, params, {
      signal
    })
    // 懒加载需要处理数据，默认没有 children 字段，需要添加空数组
    return res.map((item) => {
      if (!item.children && item.hasChildren) {
        item.children = []
      }
      return item
    })
  }

  /**
   * 树型列表
   */
  async tree(signal?: AbortSignal) {
    return this.httpRequest.get<MenuVo[]>(`${this.#API_PREFIX}/tree`, {}, { signal })
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<MenuVo>(`${this.#API_PREFIX}/detail`, { id }, { signal })
  }

  /**
   * 提交
   */
  async submit(data: MenuSubmitDto) {
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

  /**
   * 获取角色权限树
   * @param roleIds 目前支持单个角色 id
   * @param signal 信号用于取消请求
   * @returns
   */
  async grantTree(signal?: AbortSignal) {
    return this.httpRequest.get<GrantTreeVO>(`${this.#API_PREFIX}/grant-tree`, {}, { signal })
  }

  /**
   * 获取角色权限配置
   * @param roleIds
   * @param signal
   * @returns
   */
  async getRoleTreeKeys(roleIds: string, signal?: AbortSignal) {
    return this.httpRequest.get<string[]>(
      `${this.#API_PREFIX}/role-tree-keys`,
      { roleIds },
      { signal }
    )
  }
}
