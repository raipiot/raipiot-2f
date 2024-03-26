import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList } from '../../mock'
import { LifecycleStage, RelegationStatus } from '../lifecycle'
import type { SupplierBlackListPageDto, SupplierPageDto } from './dto'
import type { SupplierInfosVo, SupplierInfoVo, SuppliersVo, SupplierVo } from './vo'

export * from './dto'
export * from './enums'
export * from './vo'

export class SuppliersAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-srm/local-supplier`
  }

  async list(params: SupplierPageDto, signal?: AbortSignal) {
    console.log('list', params)
    return mockList<SupplierVo>(
      {
        id: '1',
        name: '供应商名称',
        companyTypeName: '一道新能源科技股份有限公司',
        realName: '测试员',
        phone: '1234567890',
        erpCode: '18006115188',
        lifecycleStage: LifecycleStage.POTENTIAL,
        targetLifecycleStage: LifecycleStage.VALID,
        relegationStatus: RelegationStatus.UPGRADE
      },
      {
        id: '2',
        name: '供应商名称',
        companyTypeName: '一道新能源科技股份有限公司',
        realName: '测试员',
        phone: '1234567890',
        erpCode: '18006115188',
        lifecycleStage: LifecycleStage.VALID,
        targetLifecycleStage: LifecycleStage.DISUSE,
        relegationStatus: RelegationStatus.DOWNGRADE
      }
    )
    return this.httpRequest.post<SuppliersVo>(`${this.#API_PREFIX}/list-supplier-by-page`, params, {
      signal
    })
  }

  async detail() {
    return mockEntity({})
  }

  async contactDetail() {
    return mockEntity({})
  }

  async addressDetail() {
    return mockEntity({})
  }

  async bankDetail() {
    return mockEntity({})
  }

  async invoiceDetail() {
    return mockEntity({})
  }

  async financeDetail() {
    return mockEntity({})
  }

  async attachmentDetail() {
    return mockEntity({})
  }

  async entryList() {
    return mockEntity({})
  }

  async createEntry() {
    return mockEntity({})
  }

  async saveEntryMainInfo() {
    return mockEntity({})
  }

  async saveEntrySecondaryInfo() {
    return mockEntity({})
  }

  async saveEntryCooperateInfo() {
    return mockEntity({})
  }

  async saveEntryChangeInfo() {
    return mockEntity({})
  }

  async updateEntryStatus() {
    return mockEntity({})
  }

  async introduceList() {
    return mockEntity({})
  }

  async introduceDetail() {
    return mockEntity({})
  }

  async createIntroduce() {
    return mockEntity({})
  }

  async editIntroduce() {
    return mockEntity({})
  }

  async editIntroduceStatus() {
    return mockEntity({})
  }

  async saveVerifyInfo() {
    return mockEntity({})
  }

  async unifiedSocialCodeExist() {
    return mockEntity({})
  }

  // 黑名单列表
  async backlist(params: SupplierBlackListPageDto, signal?: AbortSignal) {
    console.log('list', params)
    return mockList<SupplierInfoVo>({
      id: '1',
      erpCode: 'C000111',
      name: '供应商名称',
      joinTime: '2021-09-01 00:00:00',
      reason: '原因',
      invalidTime: '2021-09-01 00:00:00',
      creator: 'admin',
      createTime: '2021-09-01 00:00:00'
    })
    return this.httpRequest.post<SupplierInfosVo>(
      `${this.#API_PREFIX}/list-supplier-black-list-by-page`,
      params,
      {
        signal
      }
    )
  }
}
