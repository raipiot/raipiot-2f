import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList } from '../../mock'
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

  #detail = mockEntity<ResourcePoolScopeVo>({
    id: '1',
    code: 'ZY0006',
    resourcePoolTypeId: '1',
    name: '华北区域资源池',
    creatorName: 'admin',
    createdTime: '2021-08-25 00:00:00'
  })

  #list = mockList<ResourcePoolScopeVo>(this.#detail)

  async list(params: ResourcePoolScopePageDto, signal?: AbortSignal) {
    console.log('resource-pool-scope:list', params)
    return this.#list
    const data = await this.httpRequest.post<ResourcePoolScopesVo>(
      `${this.#API_PREFIX}/list-resource-pool-scope-by-page`,
      params,
      { signal }
    )
    return data
  }

  async detail(id: string, signal?: AbortSignal) {
    console.log('resource-pool-scope:detail', id)
    const data = await this.httpRequest.post<ResourcePoolScopeVo>(
      `${this.#API_PREFIX}/query-resource-pool-scope`,
      { id },
      { signal }
    )
    return data
  }

  async create(data: ResourcePoolScopeCreateDto) {
    console.log('resource-pool-scope:create', data)
    return this.httpRequest.post(`${this.#API_PREFIX}/save-resource-pool-scope`, data)
  }

  async update(data: ResourcePoolScopeUpdateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-resource-pool-scope`, data)
  }

  async remove(ids: string[]) {
    return this.httpRequest.post(`${this.#API_PREFIX}/delete-resource-pool-scope`, { ids })
  }
}
