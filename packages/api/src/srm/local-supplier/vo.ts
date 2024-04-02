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
  fromCompany?: string
  /**
   * 主键
   */
  id?: string
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

export interface LocalSupplierAddressVo {
  /**
   * 经营地址
   */
  businessAddress?: string
  /**
   * 市编码
   */
  cityCode?: string
  /**
   * 国家地区
   */
  country?: string
  /**
   * 地址备注
   */
  description?: string
  /**
   * 区编码
   */
  districtCode?: string
  /**
   * 是否启用
   */
  enabledFlag?: boolean
  /**
   * 主键 ID
   */
  id?: number
  /**
   * 邮政编码
   */
  postCode?: string
  /**
   * 省编码
   */
  provinceCode?: string
}

export interface LocalSupplierAttachmentVo {
  /**
   * 附件文件id
   */
  attachmentFileId?: string
  /**
   * 附件类型
   */
  attachmentType?: string
  /**
   * 附件描述
   */
  description?: string
  /**
   * 附件到期日期
   */
  endDate?: Date
  /**
   * 主键 ID
   */
  id?: number
  /**
   * 是否长期有效
   */
  longEffectiveFlag?: boolean
  /**
   * 备注
   */
  remark?: string
  /**
   * 子附件类型
   */
  subAttachmentType?: string
}

export interface LocalSupplierBankVo {
  /**
   * 账户名称
   */
  bankAccountName?: string
  /**
   * 银行账户
   */
  bankAccountNum?: string
  /**
   * 开户行名称
   */
  bankBranchName?: string
  /**
   * 银行(国际)代码
   */
  bankCode?: string
  /**
   * 联行行号
   */
  bankFirm?: string
  /**
   * 银行名称
   */
  bankName?: string
  /**
   * 国家地区
   */
  country?: string
  /**
   * 备注
   */
  description?: string
  /**
   * 是否启用
   */
  enabledFlag?: boolean
  /**
   * 主键 ID
   */
  id?: number
  /**
   * 主账号标识
   */
  masterFlag?: boolean
}

export interface LocalSupplierContactVo {
  /**
   * 是否默认
   */
  defaultFlag?: boolean
  /**
   * 部门
   */
  department?: string
  /**
   * 备注
   */
  description?: string
  /**
   * 电子邮箱
   */
  email?: string
  /**
   * 是否启用
   */
  enabledFlag?: boolean
  /**
   * 主键 ID
   */
  id?: number
  /**
   * 手机号国际区号
   */
  internationalTelCode?: string
  /**
   * 手机号
   */
  mobilePhone?: string
  /**
   * 姓名
   */
  name?: string
  /**
   * 职位
   */
  position?: string
  /**
   * 性别
   */
  sex?: string
  /**
   * 固定电话
   */
  telephone?: string
}

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
