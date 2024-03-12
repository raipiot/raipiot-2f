import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { PostPageDto, PostSubmitDto } from './dto'
import type { PostsVo } from './vo'

export * from './dto'
export * from './vo'

export class SystemPostAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    // TODO: 定义当前目录的前缀
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/post`
  }

  /**
   * 获取
   */
  detail(id: string, signal: AbortSignal) {
    // TODO: 添加泛型响应类型
    return this.httpRequest.get(
      `${this.#API_PREFIX}/detail`,
      {
        id
      },
      {
        signal
      }
    )
  }

  /**
   * 列表
   */
  list(params: PostPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<PostsVo>(`${this.#API_PREFIX}/list`, params, {
      signal
    })
  }

  /**
   * 提交
   */
  async submit(data: PostSubmitDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/submit`, data)
  }

  /**
   * 删除
   */
  remove(ids: string) {
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
