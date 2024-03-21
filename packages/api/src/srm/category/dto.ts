import type { PageDto } from '../../types'

export interface CategoryPageDto extends PageDto {}

export interface CategoryUpdateDto {
  /**
   * 准入品类
   */
  acceptedCategory?: string
  /**
   * 采购员
   */
  buyer?: string
  /**
   * 采购员手机号
   */
  buyerPhone?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  createUser?: number
  /**
   * 页码
   */
  current?: number
  /**
   * 是否已删除
   */
  deleted?: number
  /**
   * 供应商ERP编码
   */
  erpCode?: string
  /**
   * 邀请过期时间
   */
  expiryTime?: string
  /**
   * 邀请方公司
   */
  fromCompany?: string
  /**
   * 是否集团级标志
   */
  groupLevelFlag?: string
  /**
   * 主键
   */
  id?: number
  /**
   * 电话国际区号编码
   */
  internationalTelCode?: string
  /**
   * 邀请码
   */
  invitationCode?: string
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
  invitationTypeId?: string
  /**
   * 邀请链接
   */
  invitationUrl?: string
  /**
   * 被邀请人邮箱
   */
  inviteeEmail?: string
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 调查说明
   */
  questionnaireDescription?: string
  /**
   * 调查表标志
   */
  questionnaireFlag?: string
  /**
   * 调查表模板
   */
  questionnaireTemplate?: string
  /**
   * 调查表类型
   */
  questionnaireType?: string
  /**
   * 合作关系标志
   */
  relationshipFlag?: string
  /**
   * 页数
   */
  size?: number
  /**
   * 邀约状态
   */
  statusId?: string
  /**
   * 供应商分类
   */
  supplierCategory?: string
  /**
   * 供应商手机号
   */
  supplierPhone?: string
  /**
   * 租户id
   */
  tenantId?: number
  /**
   * 被邀请方公司
   */
  toCompany?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 修改人
   */
  updateUser?: number
}

export interface CategorySubmitDto {
  /**
   * 准入品类
   */
  acceptedCategory?: string
  /**
   * 采购员
   */
  buyer?: string
  /**
   * 采购员手机号
   */
  buyerPhone?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  createUser?: number
  /**
   * 页码
   */
  current?: number
  /**
   * 是否已删除
   */
  deleted?: number
  /**
   * 供应商ERP编码
   */
  erpCode?: string
  /**
   * 邀请过期时间
   */
  expiryTime?: string
  /**
   * 邀请方公司
   */
  fromCompany?: string
  /**
   * 是否集团级标志
   */
  groupLevelFlag?: string
  /**
   * 主键
   */
  id?: number
  /**
   * 电话国际区号编码
   */
  internationalTelCode?: string
  /**
   * 邀请码
   */
  invitationCode?: string
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
  invitationTypeId?: string
  /**
   * 邀请链接
   */
  invitationUrl?: string
  /**
   * 被邀请人邮箱
   */
  inviteeEmail?: string
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 调查说明
   */
  questionnaireDescription?: string
  /**
   * 调查表标志
   */
  questionnaireFlag?: string
  /**
   * 调查表模板
   */
  questionnaireTemplate?: string
  /**
   * 调查表类型
   */
  questionnaireType?: string
  /**
   * 合作关系标志
   */
  relationshipFlag?: string
  /**
   * 页数
   */
  size?: number
  /**
   * 邀约状态
   */
  statusId?: string
  /**
   * 供应商分类
   */
  supplierCategory?: string
  /**
   * 供应商手机号
   */
  supplierPhone?: string
  /**
   * 租户id
   */
  tenantId?: number
  /**
   * 被邀请方公司
   */
  toCompany?: string
  /**
   * 修改时间
   */
  updateTime?: string
  /**
   * 修改人
   */
  updateUser?: number
}
