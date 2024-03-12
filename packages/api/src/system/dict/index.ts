import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { SystemDictPageDto, SystemDictSubmitDto, SystemDictValuePageDto } from './dto'
import type { SystemDictsVo, SystemDictVo } from './vo'

export * from './dto'
export * from './vo'

interface DefaultOptionType {
  label?: React.ReactNode
  value?: string
  children?: Omit<DefaultOptionType, 'children'>[]
}

export class SystemDictsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/dict`
  }

  /**
   * 字典树
   */
  tree(signal?: AbortSignal) {
    return this.httpRequest.get(`${this.#API_PREFIX}/tree`, {}, { signal })
  }

  /**
   * 列表
   */
  list(params: SystemDictPageDto) {
    return this.httpRequest.get(`${this.#API_PREFIX}/list`, params)
  }

  /**
   * 父列表
   */
  async parentList(params: SystemDictPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<SystemDictsVo>(`${this.#API_PREFIX}/parent-list`, params, {
      signal
    })
  }

  /**
   * 子列表
   */
  async childList(params: SystemDictValuePageDto, signal?: AbortSignal) {
    return this.httpRequest.get<SystemDictVo[]>(`${this.#API_PREFIX}/child-list`, params, {
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
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<SystemDictVo>(`${this.#API_PREFIX}/detail`, { id }, { signal })
  }

  /**
   * 字典数据
   */
  async dictionary(code: string, signal?: AbortSignal) {
    return this.httpRequest.get<DictVo[]>(
      `${this.#API_PREFIX}/dictionary`,
      { code },
      {
        signal
      }
    )
  }

  /**
   * 字典数据树
   */
  async dictionaryTree(code: string, signal?: AbortSignal) {
    const data = await this.httpRequest.get<DictVo[]>(
      `${this.#API_PREFIX}/dictionary-tree`,
      { code },
      {
        signal
      }
    )
    return this.#rawOptionsTransfer(data, 'dictValue', 'dictKey')
  }

  /**
   * 提交
   */
  async submit(data: SystemDictSubmitDto) {
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

  #rawOptionsTransfer<T extends { children?: T[] }>(
    options: T[],
    labelKey: keyof T,
    valueKey: keyof T
  ): DefaultOptionType[] {
    return options.map((item) => {
      const { children } = item
      return {
        children:
          children && children.length > 0
            ? this.#rawOptionsTransfer(children, labelKey, valueKey)
            : [],
        label: item[labelKey] as string,
        value: item[valueKey] as string
      }
    })
  }
}
