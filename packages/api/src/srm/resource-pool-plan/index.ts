import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { ResourcePoolScopeVo } from '..'
import type {
  ResourcePoolPlanCreateDto,
  ResourcePoolPlanPageDto,
  ResourcePoolPlanStatusUpdateDto,
  ResourcePoolPlanUpdateDto
} from './dto'
import type { ResourcePoolPlansVo } from './vo'

export * from './dto'
export * from './vo'

export class ResourcePoolPlansAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/resource-pools`
  }

  async list(params: ResourcePoolPlanPageDto, signal?: AbortSignal) {
    return this.httpRequest.post<ResourcePoolPlansVo>(
      `${this.#API_PREFIX}/list-resource-pool-plan-by-page`,
      params,
      {
        signal
      }
    )
  }

  async detail(id: string, signal?: AbortSignal) {
    const data = await this.httpRequest.post<ResourcePoolScopeVo>(
      `${this.#API_PREFIX}/query-resource-pool-plan`,
      { id },
      { signal }
    )
    return data
  }

  async create(data: ResourcePoolPlanCreateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/save-resource-pool-scope`, data)
  }

  async update(data: ResourcePoolPlanUpdateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-resource-pool-scope`, data)
  }

  async updateStatus(data: ResourcePoolPlanStatusUpdateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-resource-pool-plan-status`, data)
  }

  async updateEnableStatus(data: ResourcePoolPlanStatusUpdateDto) {
    return this.httpRequest.post(`${this.#API_PREFIX}/update-resource-pool-plan-enable-state`, data)
  }
}
