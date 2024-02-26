import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { DictPageDto, DictSubmitDto, DictValuePageDto } from './dto'
import type { DictsVo, DictVo } from './vo'

export class SystemDictsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/dict`
  }

  /**
   * 字典树
   */
  tree() {
    return this.httpRequest.get(`${this.#API_PREFIX}/tree`)
  }

  /**
   * 列表
   */
  list(params: DictPageDto) {
    return this.httpRequest.get(`${this.#API_PREFIX}/list`, params)
  }

  /**
   * 父列表
   */
  async parentList(params: DictPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<DictsVo>(`${this.#API_PREFIX}/parent-list`, params, {
      signal
    })
  }

  /**
   * 子列表
   */
  async childList(params: DictValuePageDto, signal?: AbortSignal) {
    return this.httpRequest.get<DictVo[]>(`${this.#API_PREFIX}/child-list`, params, {
      signal
    })
  }

  /**
   * 父级树
   */
  async parentTree() {
    return this.httpRequest.get(`${this.#API_PREFIX}/parent-tree`)
  }

  /**
   * 字典键值列表
   */
  async select() {
    return this.httpRequest.get(`${this.#API_PREFIX}/select`)
  }

  /**
   * 全部字典
   */
  async selectAll() {
    return this.httpRequest.get(`${this.#API_PREFIX}/select-all`)
  }

  /**
   * 详情
   */
  async detail() {
    return this.httpRequest.get<DictVo>(`${this.#API_PREFIX}/detail`)
  }

  /**
   * 字典数据
   */
  async dictionary() {
    return this.httpRequest.get(`${this.#API_PREFIX}/dictionary`)
  }

  /**
   * 字典数据树
   */
  async dictionaryTree() {
    return this.httpRequest.get(`${this.#API_PREFIX}/dictionary-tree`)
  }

  /**
   * 提交
   */
  async submit(data: DictSubmitDto) {
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
}
