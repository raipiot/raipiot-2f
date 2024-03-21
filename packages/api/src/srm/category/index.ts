import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { CategoryPageDto } from './dto'
import type { CategoriesVo, CategoryVo } from './vo'

export * from './dto'
export * from './vo'

export class CategoriesAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/supplier-config`
  }

  async list(params: CategoryPageDto, signal?: AbortSignal) {
    const data = await this.httpRequest.post<CategoriesVo>(
      `${this.#API_PREFIX}/list-category-access-config-by-page`,
      params,
      { signal }
    )
    return data
  }

  async detail(id: string, signal?: AbortSignal) {
    const data = await this.httpRequest.post<CategoryVo>(
      `${this.#API_PREFIX}/query-category-access-config`,
      { id },
      { signal }
    )
    return data
  }
}
