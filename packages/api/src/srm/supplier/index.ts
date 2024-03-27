import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntities, mockEntity, mockList } from '../../mock'
import { LifecycleStage, RelegationStatus } from '../lifecycle'
import type {
  SupplierBlackListPageDto,
  SupplierEntryCheckSocialCodeDto,
  SupplierEntryCooperateInfoSubmitDto,
  SupplierEntryCreateDto,
  SupplierEntryMainInfoSubmitDto,
  SupplierEntryPageDto,
  SupplierEntrySecondaryInfoSubmitDto,
  SupplierIntroPageDto,
  SupplierIntroUpdateDto,
  SupplierIntroUpdateStatusDto,
  SupplierPageDto,
  SupplierVerifyInfoDto
} from './dto'
import type {
  SupplierAddressVo,
  SupplierAttachmentVo,
  SupplierBankVo,
  SupplierContactVo,
  SupplierEntriesVo,
  SupplierEntryVo,
  SupplierFinanceVo,
  SupplierInfosVo,
  SupplierInfoVo,
  SupplierIntroDetailVo,
  SupplierIntrosVo,
  SupplierIntroVo,
  SupplierInvoiceVo,
  SuppliersVo,
  SupplierVo
} from './vo'

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

  // 供应商详情
  async detail(id: string, signal?: AbortSignal) {
    console.log('detail', id)
    return mockEntity<SupplierInfoVo>({})
    return this.httpRequest.post<SupplierInfoVo>(
      `${this.#API_PREFIX}/get-supplier-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  // 联系人详情
  async contactDetail(id: string, signal?: AbortSignal) {
    console.log('contact', id)
    return mockEntities<SupplierContactVo>({})
    return this.httpRequest.post<SupplierContactVo[]>(
      `${this.#API_PREFIX}/get-supplier-contact-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  async addressDetail(id: string, signal?: AbortSignal) {
    console.log('address', id)
    return mockEntities<SupplierAddressVo>({})
    return this.httpRequest.post<SupplierAddressVo[]>(
      `${this.#API_PREFIX}/get-supplier-address-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  async bankDetail(id: string, signal?: AbortSignal) {
    console.log('bank', id)
    return mockEntities<SupplierBankVo>({})
    return this.httpRequest.post<SupplierBankVo[]>(
      `${this.#API_PREFIX}/get-supplier-bank-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  async invoiceDetail(id: string, signal?: AbortSignal) {
    console.log('invoice', id)
    return mockEntities<SupplierInvoiceVo>({})
    return this.httpRequest.post<SupplierInvoiceVo[]>(
      `${this.#API_PREFIX}/get-supplier-invoice-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  async financeDetail(id: string, signal?: AbortSignal) {
    console.log('finance', id)
    return mockEntities<SupplierFinanceVo>({})
    return this.httpRequest.post<SupplierFinanceVo[]>(
      `${this.#API_PREFIX}/get-supplier-finance-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  async attachmentDetail(id: string, signal?: AbortSignal) {
    console.log('attachment', id)
    return mockEntities<SupplierAttachmentVo>({})
    return this.httpRequest.post<SupplierAttachmentVo[]>(
      `${this.#API_PREFIX}/get-supplier-attachment-detail/${id}`,
      {},
      {
        signal
      }
    )
  }

  // 录入分页
  async entryList(params: SupplierEntryPageDto, signal?: AbortSignal) {
    console.log('list', params)
    return mockList<SupplierEntryVo>({
      id: '1',
      entryNo: '123',
      status: '待提交',
      supplierCode: 'C20240',
      supplierName: '供应商名称',
      fromCompanyName: '所属基地',
      creatorName: 'admin',
      createdTime: '2021-09-01 00:00:00'
    })
    return this.httpRequest.post<SupplierEntriesVo>(
      `${this.#API_PREFIX}/list-supplier-entry-record-by-page`,
      params,
      {
        signal
      }
    )
  }

  // 新建录入记录
  async createEntry(data: SupplierEntryCreateDto) {
    console.log('create')
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-change-record`, data)
  }

  // 保存录入主要信息
  async saveEntryMainInfo(data: SupplierEntryMainInfoSubmitDto) {
    console.log('save-main', data)
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-main-info`, data)
  }

  // 保存录入次要信息
  async saveEntrySecondaryInfo(data: SupplierEntrySecondaryInfoSubmitDto) {
    console.log('save-secondary', data)
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-secondary-info`, data)
  }

  // 保存录入合作信息
  async saveEntryCooperateInfo(data: SupplierEntryCooperateInfoSubmitDto) {
    console.log('save-cooperate', data)
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-cooperate-info`, data)
  }

  async saveEntryChangeInfo(data: SupplierEntryCreateDto) {
    console.log('save-change', data)
    return mockEntity({})
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-change-info`, data)
  }

  async updateEntryStatus(data: SupplierEntryCreateDto) {
    console.log('update-status')
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/update-supplier-entry-status`, data)
  }

  async introduceList(params: SupplierIntroPageDto, signal?: AbortSignal) {
    console.log('list', params)
    return mockList<SupplierIntroVo>({
      id: '1',
      requestNo: 'KZ202401010005',
      status: '新建',
      creatorName: 'admin',
      createdTime: '2021-09-01 00:00:00',
      approvePassTime: '2021-09-01 00:00:00'
    })
    return this.httpRequest.post<SupplierIntrosVo>(
      `${this.#API_PREFIX}/list-supplier-introduce-by-page`,
      params,
      {
        signal
      }
    )
  }

  async introduceDetail(id: string, signal?: AbortSignal) {
    return mockEntity<SupplierIntroDetailVo>({})
    return this.httpRequest.post<SupplierIntroDetailVo>(
      `${this.#API_PREFIX}/query-supplier-introduction`,
      { id },
      { signal }
    )
  }

  async createIntroduce(data: SupplierEntryCreateDto) {
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-introduction-request`, data)
  }

  async editIntroduce(data: SupplierIntroUpdateDto) {
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/update-supplier-introduction-request`, data)
  }

  async editIntroduceStatus(data: SupplierIntroUpdateStatusDto) {
    return {}
    return this.httpRequest.post(
      `${this.#API_PREFIX}/update-supplier-introduction-request-status`,
      data
    )
  }

  async saveVerifyInfo(data: SupplierVerifyInfoDto) {
    return {}
    return this.httpRequest.post(`${this.#API_PREFIX}/save-supplier-verify-info`, data)
  }

  // 统一社会信用代码是否存在
  async unifiedSocialCodeExist(data: SupplierEntryCheckSocialCodeDto) {
    console.log('unified-social-code-exist', data)
    return {}
    return this.httpRequest.post(
      `${this.#API_PREFIX}/validate-supplier-unified_social_code_exist`,
      data
    )
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
