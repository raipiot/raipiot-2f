import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList } from '../../mock'
import type {
  LocalSupplierAddressVo,
  LocalSupplierAttachmentVo,
  LocalSupplierBankVo,
  LocalSupplierContactVo,
  LocalSupplierPageDto,
  LocalSupplierRecordPageDto,
  LocalSupplierRecordsVo,
  LocalSupplierRecordVo,
  LocalSupplierStatusUpdateDto,
  LocalSupplierSubmitDto,
  LocalSuppliersVo,
  LocalSupplierUpdateDto,
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
    return mockList<LocalSupplierVo>({
      id: '1',
      unifiedSocialCode: 'DDD123',
      supplierCode: 'ABC123',
      name: '供应商名称',
      organizationCode: 'CCC123'
    })
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

  async addressDetail(id: string) {
    return mockEntity<LocalSupplierAddressVo>({})
    return this.httpRequest.post<LocalSupplierAddressVo>(`${this.#API_PREFIX}/address/detail`, {
      id
    })
  }

  async attachmentDetail(id: string) {
    return mockEntity<LocalSupplierAttachmentVo>({})
    return this.httpRequest.post<LocalSupplierAttachmentVo>(
      `${this.#API_PREFIX}/attachment/detail`,
      { id }
    )
  }

  async bankDetail(id: string) {
    return mockEntity<LocalSupplierBankVo>({})
    return this.httpRequest.post<LocalSupplierBankVo>(`${this.#API_PREFIX}/bank/detail`, { id })
  }

  async contactDetail(id: string) {
    return mockEntity<LocalSupplierContactVo>({})
    return this.httpRequest.post<LocalSupplierContactVo>(`${this.#API_PREFIX}/contact/detail`, {
      id
    })
  }

  async submit(data: LocalSupplierSubmitDto) {
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/submit`, data)
  }

  async update(data: LocalSupplierUpdateDto) {
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/update`, data)
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

  async greenChannelStatusUpdate(data: LocalSupplierStatusUpdateDto) {
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/green-channel/status-update`, data)
  }
}
