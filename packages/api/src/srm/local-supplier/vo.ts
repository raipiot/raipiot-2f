import type { Page } from '../..'

export interface LocalSupplierVo {
  /**
   * 准入品类id
   */
  acceptedCategoryId?: number
  /**
   * 创建时间
   */
  createdTime?: Date
  /**
   * 创建用户 ID
   */
  creatorId?: number
  /**
   * 创建用户名
   */
  creatorName?: string
  /**
   * 所属部门
   */
  departmentId?: number
  /**
   * 变更备注
   */
  description?: string
  /**
   * 邓白氏编码
   */
  dunsCode?: string
  /**
   * 启用状态(0-禁用 1-启用)
   */
  enableState?: string
  /**
   * 所属公司
   */
  fromCompany?: number
  /**
   * 主键
   */
  id?: number
  /**
   * 身份证号
   */
  identityCardNo?: string
  /**
   * 本地供应商名称
   */
  name?: string
  /**
   * 组织机构代码
   */
  organizationCode?: string
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 护照
   */
  passport?: string
  /**
   * 申请编号
   */
  requestNo?: string
  /**
   * 状态(0-新建 1-已提交 2-审批通过 3-审批拒绝)
   */
  status?: string
  /**
   * 提交日期
   */
  submitTime?: Date
  /**
   * 本地供应商编码
   */
  supplierCode?: string
  /**
   * 关联平台供应商id
   */
  supplierId?: number
  /**
   * 供应商类型
   */
  supplierType?: string
  /**
   * 统一社会信用代码
   */
  unifiedSocialCode?: string
  /**
   * 更新时间
   */
  updatedTime?: Date
  /**
   * 更新用户 ID
   */
  updaterId?: number
  /**
   * 更新用户名
   */
  updaterName?: string
  /**
   * 版本号
   */
  version?: number
}

export type LocalSuppliersVo = Page<LocalSupplierVo>

export interface LocalSupplierRecordVo {
  /**
   * 创建时间
   */
  createdTime?: Date
  /**
   * 创建用户 ID
   */
  creatorId?: number
  /**
   * 创建用户名
   */
  creatorName?: string
  /**
   * 变更备注
   */
  description?: string
  /**
   * 主键
   */
  id?: number
  /**
   * 本地供应商id
   */
  localSupplierId?: number
  /**
   * 本地供应商名称
   */
  name?: string
  /**
   * 申请编号
   */
  requestNo?: string
  /**
   * 状态 1-新建 2-待审核 3-审核通过 4-审核驳回
   */
  status?: string
  /**
   * 状态 状态 1-新建 2-待审核 3-审核通过 4-审核驳回
   */
  statusName?: string
  /**
   * 提交日期
   */
  submitTime?: Date
  /**
   * 本地供应商编码
   */
  supplierCode?: string
  /**
   * 更新时间
   */
  updatedTime?: Date
  /**
   * 更新用户 ID
   */
  updaterId?: number
  /**
   * 更新用户名
   */
  updaterName?: string
}

export type LocalSupplierRecordsVo = Page<LocalSupplierRecordVo>
