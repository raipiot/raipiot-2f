import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { SampleSheetsByOriginPageDto, SampleSheetsPageDto, SampleSheetsSubmitDto } from './dto'
import type { SampleSheetsVo } from './vo'

export * from './dto'
export * from './vo'

export class SampleSheetsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}#{apiPrefix}/sampleSheets`
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    return this.httpRequest.get<SampleSheetsVo>(
      `${this.#API_PREFIX}/detail`,
      { id },
      {
        signal
      }
    )
  }

  /**
   * 列表
   */
  async list(params?: SampleSheetsPageDto, signal?: AbortSignal) {
    // return this.httpRequest.get<SampleSheetsVo>(`${this.#API_PREFIX}/list`, params, {
    //   signal
    // })

    // 基于 SampleSheetsPageDto 类型，mock 返回值数据
    return {
      records: [
        {
          id: '1',
          orderNo: 'orderNo',
          status: 'status',
          initiator: 'initiator',
          inventoryOrganization: 'inventoryOrganization',
          supplierCode: 'supplierCode',
          supplierName: 'supplierName',
          companyName: 'companyName',
          businessEntityName: 'businessEntityName',
          supplierType: 'supplierType',
          originalFactoryName: 'originalFactoryName',
          sampleType: 'sampleType',
          applicant: 'applicant',
          sampleReceiver: 'sampleReceiver',
          sampleReceiverPhone: 'sampleReceiverPhone',
          sampleAddress: 'sampleAddress',
          sampleSender: 'sampleSender',
          sampleSenderPhone: 'sampleSenderPhone',
          sampleMethod: 'sampleMethod',
          expressNo: 'expressNo',
          estimatedArrivalTime: 'estimatedArrivalTime',
          urgency: 'urgency',
          createTime: 'createTime'
        },
        {
          id: '2',
          orderNo: 'orderNo2',
          status: 'status2',
          initiator: 'initiator2',
          inventoryOrganization: 'inventoryOrganization2',
          supplierCode: 'supplierCode2',
          supplierName: 'supplierName2',
          companyName: 'companyName2',
          businessEntityName: 'businessEntityName2',
          supplierType: 'supplierType2',
          originalFactoryName: 'originalFactoryName2',
          sampleType: 'sampleType2',
          applicant: 'applicant2',
          sampleReceiver: 'sampleReceiver2',
          sampleReceiverPhone: 'sampleReceiverPhone2',
          sampleAddress: 'sampleAddress2',
          sampleSender: 'sampleSender',
          sampleSenderPhone: 'sampleSenderPhone',
          sampleMethod: 'sampleMethod',
          expressNo: 'expressNo',
          estimatedArrivalTime: 'estimatedArrivalTime',
          urgency: 'urgency',
          createTime: 'createTime'
        }
      ],
      total: 1
    }
  }

  /**
   * 提交
   */
  async submit(data: SampleSheetsSubmitDto) {
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

  /**
   * 发布送样表
   * @param ids
   * @returns
   */
  async publish(ids: string) {
    return this.httpRequest.post(
      `${this.#API_PREFIX}/publish`,
      {},
      {
        params: {
          ids
        }
      }
    )
  }

  // 寻源列表
  async listByOrigin(params: SampleSheetsByOriginPageDto, signal?: AbortSignal) {
    // 根据 SampleSheetsByOriginVo 模拟数据
    return {
      total: 2,
      records: [
        {
          orderNo: '123456',
          supplierName: 'Supplier A',
          supplierCode: 'A001',
          isHangUp: false,
          erpSupplierCode: 'ERP001',
          materialDescription: 'Material A',
          materialCode: 'M001',
          materialClassification: 'Class A',
          currency: 'USD',
          quantity: 10,
          taxRate: 0.1,
          unitPrice: 100,
          deliveryDate: '2022-01-01',
          company: 'Company A',
          businessEntity: 'Entity A',
          purchasingOrganization: 'PO001',
          inventoryOrganization: 'IO001'
        },
        {
          orderNo: '789012',
          supplierName: 'Supplier B',
          supplierCode: 'B001',
          isHangUp: true,
          erpSupplierCode: 'ERP002',
          materialDescription: 'Material B',
          materialCode: 'M002',
          materialClassification: 'Class B',
          currency: 'EUR',
          quantity: 5,
          taxRate: 0.2,
          unitPrice: 200,
          deliveryDate: '2022-02-01',
          company: 'Company B',
          businessEntity: 'Entity B',
          purchasingOrganization: 'PO002',
          inventoryOrganization: 'IO002'
        }
      ]
    }

    // return this.httpRequest.get<SampleSheetsVo>(
    //   `${this.#API_PREFIX}/listByOrigin`,
    //   params,
    //   {
    //     signal
    //   }
    // )
  }
}
