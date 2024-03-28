import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type {
  Handmade,
  SampleSheetsByOriginPageDto,
  SampleSheetsPageDto,
  SampleSheetsSubmitDto
} from './dto'
import type { SampleSheetsVo, SampleSheetVo } from './vo'

export * from './dto'
export * from './vo'

export class SampleSheetsAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/sample-delivery`
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    // return this.httpRequest.get<SampleSheetsVo>(
    //   `${this.#API_PREFIX}/detail`,
    //   { id },
    //   {
    //     signal
    //   }
    // )
    return {
      id: '123456789',
      orderNo: 'ORD123456',
      status: 'Pending',
      initiator: 'John Doe',
      inventoryOrganization: 'ABC Company',
      supplierCode: 'SUP001',
      supplierName: 'Supplier A',
      companyName: 'XYZ Corporation',
      businessEntityName: 'Business Entity 1',
      supplierType: 'Type A',
      originalFactoryName: 'Factory X',
      sampleType: 'Type B',
      applicant: 'Jane Smith',
      sampleReceiver: 'Alice Johnson',
      sampleReceiverPhone: '123-456-7890',
      sampleAddress: '123 Sample Street, City',
      sampleSender: 'Bob Thompson',
      sampleSenderPhone: '987-654-3210',
      sampleMethod: 'Courier',
      expressNo: 'EXP123456789',
      estimatedArrivalTime: '2024-03-29 10:00 AM',
      urgency: 'High',
      createTime: '2024-03-28 02:30 PM'
    }
  }

  /**
   * 列表
   */
  async list(params?: SampleSheetsPageDto, signal?: AbortSignal) {
    console.log(params)
    //
    // return this.httpRequest.post<SampleSheetsVo>(
    //   `${this.#API_PREFIX}/list-sample-delivery-by-purchaser-by-page`,
    //   params,
    //   {
    //     signal
    //   }
    // )
    return {
      total: 0,
      records: [
        {
          id: '123456789',
          orderNo: 'ORD123456',
          status: 'Pending',
          initiator: 'John Doe',
          inventoryOrganization: 'ABC Company',
          supplierCode: 'SUP001',
          supplierName: 'Supplier A',
          companyName: 'XYZ Corporation',
          businessEntityName: 'Business Entity 1',
          supplierType: 'Type A',
          originalFactoryName: 'Factory X',
          sampleType: 'Type B',
          applicant: 'Jane Smith',
          sampleReceiver: 'Alice Johnson',
          sampleReceiverPhone: '123-456-7890',
          sampleAddress: '123 Sample Street, City',
          sampleSender: 'Bob Thompson',
          sampleSenderPhone: '987-654-3210',
          sampleMethod: 'Courier',
          expressNo: 'EXP123456789',
          estimatedArrivalTime: '2024-03-29 10:00 AM',
          urgency: 'High',
          createTime: '2024-03-28 02:30 PM'
        }
      ] as SampleSheetVo[]
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

  /**
   * 保存手动创建的送样表
   * @param data SampleSheetsSubmitDto
   */
  async saveSheetByHandmade(data: Handmade) {
    return this.httpRequest.post<{ id: string }>(`${this.#API_PREFIX}/save-sample-delivery`, data)
  }

  /**
   * 删除送样表
   * @param id string
   * @returns
   */
  async deleteSheet(id: string) {
    return this.httpRequest.post(`${this.#API_PREFIX}/delete-sample-delivery`, { id })
  }

  /**
   * 送样反馈列表
   */
  async feedbackList(params: SampleSheetsPageDto, signal?: AbortSignal) {
    return this.httpRequest.get<SampleSheetsVo>(`${this.#API_PREFIX}/feedback-list`, params, {
      signal
    })
  }
}
