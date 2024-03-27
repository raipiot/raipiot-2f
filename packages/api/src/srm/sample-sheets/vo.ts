import type { Page } from '../../types'
import type { SampleSheetsSubmitDto } from './dto'

// 单条数据 Vo, 基于提交的数据类型
export interface SampleSheetVo extends SampleSheetsSubmitDto {
  // Id
  id: string
  // 单号
  orderNo: string
  // 状态
  status: string
  // 发起方
  initiator: string
  // 库存组织
  inventoryOrganization: string
  // 供应商编码
  supplierCode: string
  // 供应商名称
  supplierName: string
  // 公司名称
  companyName: string
  // 业务实体名称
  businessEntityName: string
  // 供应商类型
  supplierType: string
  // 原厂名称
  originalFactoryName: string
  // 送样类型
  sampleType: string
  // 申请人
  applicant: string
  // 接样人
  sampleReceiver: string
  // 接样人电话
  sampleReceiverPhone: string
  // 送样地址
  sampleAddress: string
  // 送样人
  sampleSender: string
  // 送样人电话
  sampleSenderPhone: string
  // 送样方式
  sampleMethod: string
  // 快递单号
  expressNo: string
  // 预计送达时间
  estimatedArrivalTime: string
  // 紧急程度
  urgency: string
  // 创建时间
  createTime: string
}

// 分页数据 Vo
export type SampleSheetsVo = Page<SampleSheetsVo>
