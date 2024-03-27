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

// 寻源数据 TODO: 暂时不做
export interface SampleSheetsByOriginVo {
  // 单号
  orderNo: string
  // 供应商名称
  supplierName: string
  // 供应商编码
  supplierCode: string
  // 是否暂时挂起
  isHangUp: boolean
  // ERP 供应商编码
  erpSupplierCode: string
  // 物料描述
  materialDescription: string
  // 物料编码
  materialCode: string
  // 物料分类
  materialClassification: string
  // 币种
  currency: string
  // 数量
  quantity: number
  // 税率
  taxRate: number
  // 单价
  unitPrice: number
  // 交货日期
  deliveryDate: string
  // 公司
  company: string
  // 业务实体
  businessEntity: string
  // 采购组织
  purchasingOrganization: string
  // 库存组织
  inventoryOrganization: string
}

// 分页数据 Vo
export type SampleSheetsByOriginPageVo = Page<SampleSheetsByOriginVo>
