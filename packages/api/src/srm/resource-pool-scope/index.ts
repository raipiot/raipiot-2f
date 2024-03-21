import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type {
  ResourcePoolScopeCreateDto,
  ResourcePoolScopePageDto,
  ResourcePoolScopeUpdateDto
} from './dto'
import type { ResourcePoolScopesVo, ResourcePoolScopeVo } from './vo'

export * from './dto'
export * from './vo'

export class ResourcePoolScopesAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/resource-pools`
  }

  async list(params: ResourcePoolScopePageDto, signal?: AbortSignal) {
    const data = await this.httpRequest.post<ResourcePoolScopesVo>(
      `${this.#API_PREFIX}/list-resource-pool-scope-by-page`,
      params,
      { signal }
    )
    return data
  }

  async detail(id: string, signal?: AbortSignal) {
    const data = await this.httpRequest.post<ResourcePoolScopeVo>(
      `${this.#API_PREFIX}/query-resource-pool-scope`,
      { id },
      { signal }
    )
    return data
  }

  async create(data: ResourcePoolScopeCreateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/save-resource-pool-scope`, data)
  }

  async update(data: ResourcePoolScopeUpdateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-resource-pool-scope`, data)
  }

  async remove(ids: string[]) {
    return this.httpRequest.post(`${this.#API_PREFIX}/delete-resource-pool-scope`, { ids })
  }
}
