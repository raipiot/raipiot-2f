import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList } from '../../mock'
import type { InvitationPageDto, InvitationSubmitDto } from './dto'
import type { InvitationsVo, InvitationVo } from './vo'

export * from './dto'
export * from './vo'

export class InvitationsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/invitation`
  }

  async list(params: InvitationPageDto, signal?: AbortSignal) {
    console.log('list', params)
    return mockList<InvitationVo>({
      id: '1',
      invitationCode: '129277',
      state: '未注册',
      fromCompany: '基地公司全称',
      erpCode: '18006115188',
      toCompany: '供应商公司全称',
      createTime: '2021-08-31 15:00:00',
      buyer: '测试员'
    })
    return this.httpRequest.post<InvitationsVo>(
      `${this.#API_PREFIX}/list-invitation-by-page`,
      params,
      { signal }
    )
  }

  async detail(id: string, signal?: AbortSignal) {
    console.log('detail', id)
    return mockEntity<InvitationVo>({
      id: '1',
      invitationCode: '129277',
      state: '未注册',
      fromCompany: '基地公司全称',
      erpCode: '18006115188',
      toCompany: '供应商公司全称',
      createTime: '2021-08-31 15:00:00',
      buyer: '测试员'
    })
    return this.httpRequest.post<InvitationVo>(
      `${this.#API_PREFIX}/query-invitation`,
      { id },
      { signal }
    )
  }

  async submit(data: InvitationSubmitDto) {
    console.log('submit', data)
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-register`, data)
  }
}
