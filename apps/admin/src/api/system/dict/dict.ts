import { httpRequest } from '@/axios'

import type { DictPageDto, DictSubmitDto } from './dict.dto'
import type { DictsVo, DictVo } from './dict.vo'

export class SystemDictAPI {
  static #API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/raipiot-system/dict`

  /**
   * 字典树
   */
  static async tree() {
    return httpRequest.get(`${this.#API_PREFIX}/tree`)
  }

  /**
   * 列表
   */
  static async list(params: DictPageDto) {
    return httpRequest.get<DictsVo>(`${this.#API_PREFIX}/list`, params)
  }

  /**
   * 子列表
   */
  static async childList() {
    return httpRequest.get(`${this.#API_PREFIX}/child-list`)
  }

  /**
   * 父列表
   */
  static async parentList() {
    return httpRequest.get(`${this.#API_PREFIX}/parent-list`)
  }

  /**
   * 父级树
   */
  static async parentTree() {
    return httpRequest.get(`${this.#API_PREFIX}/parent-tree`)
  }

  /**
   * 字典键值列表
   */
  static async select() {
    return httpRequest.get(`${this.#API_PREFIX}/select`)
  }

  /**
   * 全部字典
   */
  static async selectAll() {
    return httpRequest.get(`${this.#API_PREFIX}/select-all`)
  }

  /**
   * 详情
   */
  static async detail() {
    return httpRequest.get<DictVo>(`${this.#API_PREFIX}/detail`)
  }

  /**
   * 字典数据
   */
  static async dictionary() {
    return httpRequest.get(`${this.#API_PREFIX}/dictionary`)
  }

  /**
   * 字典数据树
   */
  static async dictionaryTree() {
    return httpRequest.get(`${this.#API_PREFIX}/dictionary-tree`)
  }

  /**
   * 提交
   */
  static async submit(data: DictSubmitDto) {
    return httpRequest.post(`${this.#API_PREFIX}/submit`, data)
  }

  /**
   * 删除
   */
  static async remove(ids: string) {
    return httpRequest.post(
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
