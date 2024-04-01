import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList } from '../../mock'
import type {
  LocalSupplierPageDto,
  LocalSupplierRecordPageDto,
  LocalSupplierRecordsVo,
  LocalSupplierRecordVo,
  LocalSuppliersVo,
  LocalSupplierVo
} from '..'

export * from './dto'
export * from './vo'

export class LocalSuppliersAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-srm/local-supplier`
  }

  async list(params: LocalSupplierPageDto, signal?: AbortSignal) {
    return mockList<LocalSupplierVo>({})
    return this.httpRequest.post<LocalSuppliersVo>(`${this.#API_PREFIX}/list`, params, { signal })
  }

  async detail(id: string, signal?: AbortSignal) {
    return mockEntity<LocalSupplierRecordVo>({})
    return this.httpRequest.post<LocalSupplierRecordVo>(
      `${this.#API_PREFIX}/detail`,
      { id },
      {
        signal
      }
    )
  }

  async greenChannelList(params: LocalSupplierRecordPageDto, signal?: AbortSignal) {
    return mockList<LocalSupplierRecordVo>({})
    return this.httpRequest.post<LocalSupplierRecordsVo>(
      `${this.#API_PREFIX}/green-channel/list`,
      params,
      { signal }
    )
  }

  async greenChannelDetail(id: string, signal?: AbortSignal) {
    return mockEntity<LocalSupplierRecordVo>({})
    return this.httpRequest.post<LocalSupplierRecordVo>(
      `${this.#API_PREFIX}/green-channel/detail`,
      { id },
      { signal }
    )
  }
}
