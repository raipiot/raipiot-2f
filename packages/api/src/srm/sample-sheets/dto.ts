import type { PageDto } from '../../types'
// 这个是分页的 upload dto
export interface SampleSheetsPageDto extends PageDto {
  /**
   * 创建结束日期
   */
  createdEndTime?: string
  /**
   * 创建开始日期
   */
  createdStartTime?: string
  // 供应商
  supplier?: string
  // 单号
  orderNo?: string
  // 客户
  customer?: string
}

export interface SampleSheetsByOriginPageDto {
  // 单号
  orderNo?: string
  // 供应商名称
  supplierName?: string
  // 物料名称
  materialName?: string
}

// 手动创建提交的 dto
export interface SampleSheetsSubmitDto {
  /**
   * 主键
   */
  id?: string
}

//  手动创建送样表
export interface SampleSheetByHandmadeDto {
  /**
   * 申请人联系电话
   */
  applicantPhone?: string
  /**
   * 申请单号
   */
  applicationCode?: string
  /**
   * 是否直接确认
   */
  confirmFlag?: number
  /**
   * id
   */
  id?: number
  /**
   * 发起方
   */
  initiator?: number
  /**
   * 库存组织id
   */
  inventoryOrganizationId?: number
  /**
   * 是否需要供应商反馈
   */
  needFeedbackFlag?: number
  /**
   * 备注
   */
  notes?: string
  /**
   * 原厂名称
   */
  originalFactoryName?: string
  /**
   * 接受部门id
   */
  recipientDepartmentId?: number
  /**
   * 送样地址
   */
  sampleAddress?: string
  /**
   * 送样申请来源
   */
  sampleApplicationSource?: number
  /**
   * 样品信息
   */
  sampleCommandList?: SampleInfo[]
  /**
   * 接样人
   */
  sampleRecipient?: string
  /**
   * 接样联系电话
   */
  sampleRecipientPhone?: string
  /**
   * 送样类型
   */
  sampleType?: number
  /**
   * 单据状态
   */
  status?: number
  /**
   * 供应商id
   */
  supplierId?: number
  /**
   * 供应商类型
   */
  supplierType?: number
  /**
   * 紧急程度
   */
  urgency?: number
  [property: string]: any
}

/**
 * SampleCommand 样品信息
 */
export interface SampleInfo {
  /**
   * 品类id
   */
  categoryId?: number
  /**
   * 送样需求时间
   */
  demandTime?: Date
  /**
   * 物料id
   */
  materialId?: number
  /**
   * 送样需求数量
   */
  number?: number
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 送样时间
   */
  sampleDeliveryTime?: Date
  /**
   * 送样方式
   */
  sampleDeliveryType?: number
  /**
   * 送样人
   */
  sampleSender?: string
  /**
   * 送样电话
   */
  sampleSenderPhone?: string
  /**
   * 供应商备注
   */
  supplierNotes?: string
  /**
   * 快递单号
   */
  trackingNumber?: string
  /**
   * 试用部门
   */
  trialDepartment?: string
  /**
   * 试用车间
   */
  trialWorkshop?: string
  [property: string]: any
}
