import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import type { SampleSheetsPageDto, SampleSheetsSubmitDto } from './dto'
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
}
