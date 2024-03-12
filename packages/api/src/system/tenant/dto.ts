import type { PageDto } from '../../types'

export interface TenantPageDto extends PageDto {
  tenantId?: string
  tenantName?: string
  linkman?: string
}

export interface TenantSubmitDto {
  /**
   * 账号额度
   */
  accountNumber?: number
  /**
   * 联系地址
   */
  address?: string
  /**
   * 系统背景
   */
  backgroundUrl?: string
  /**
   * 联系电话
   */
  contactNumber?: string
  /**
   * 创建部门
   */
  createDept?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  createUser?: string
  /**
   * 数据源ID
   */
  datasourceId?: string
  /**
   * 域名地址
   */
  domainUrl?: string
  /**
   * 过期时间
   */
  expireTime?: string
  /**
   * 主键id
   */
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 授权码
   */
  licenseKey?: string
  /**
   * 联系人
   */
  linkman?: string
  /**
   * 产品包ID
   */
  packageId?: string
  /**
   * 业务状态
   */
  status?: number
  /**
   * 租户ID
   */
  tenantId?: string
  /**
   * 租户名称
   */
  tenantName?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 更新人
   */
  updateUser?: string
}
