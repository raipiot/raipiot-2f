import type { PageDto } from '../..'

export interface InvitationPageDto extends PageDto {
  /**
   * 邀请类型
   */
  invitationType?: string
  /**
   * 供应商
   */
  supplier?: string
  /**
   *
   */
  customer?: string
  /**
   * 生命周期
   */
  lifecycle?: string
  /**
   * 物料
   */
  material?: string
  /**
   * 供应商分类
   */
  supplierCategory?: string
}

export interface InvitationSubmitDto {
  /**
   * 准入品类
   */
  acceptedCategoryId: number
  /**
   * 采购电话国际区号编码
   */
  buyerInternationalTelCode?: string
  /**
   * 采购员手机号
   */
  buyerPhone?: string
  /**
   * 采购策略负责人
   */
  buyStrategyHead: number
  /**
   * 供应商ERP编码
   */
  erpCode?: string
  /**
   * 邀请方公司
   */
  fromCompany?: string
  /**
   * 是否集团级标志
   */
  groupLevelFlag: string
  /**
   * 邀请说明
   */
  invitationDescription?: string
  /**
   * 发送邀约合作标志
   */
  invitationFlag?: string
  /**
   * 邀请类型
   */
  invitationType?: string
  /**
   * 供应商邮箱
   */
  inviteeEmail?: string
  /**
   * 邀约状态
   */
  status?: string
  /**
   * 供应商电话国际区号编码
   */
  supplierInternationalTelCode?: string
  /**
   * 供应商手机号
   */
  supplierPhone?: string
  /**
   * 被邀请方公司
   */
  toCompany?: string
}
