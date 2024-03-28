import type {
  AddressCommand,
  AttachmentCommand,
  BankCommand,
  ContactCommand,
  PageDateDto,
  PageDto
} from '../..'

export interface LocalSupplierPageDto extends PageDto {
  name?: string
  unifiedSocialCode?: string
}

export interface LocalSupplierRecordPageDto extends PageDateDto {
  name?: string
  status?: string
  formType?: string
}

export interface LocalSupplierSubmitDto {
  /**
   * 准入品类id
   */
  acceptedCategoryId: number
  /**
   * 地址信息
   */
  addressList?: AddressCommand[]
  /**
   * 附件信息
   */
  attachmentList?: AttachmentCommand[]
  /**
   * 银行信息
   */
  bankList?: BankCommand[]
  /**
   * 联系人信息
   */
  contactList?: ContactCommand[]
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
   * 启用状态
   */
  enableState: string
  /**
   * 单据类型(1-新增 2-变更)
   */
  formType: string
  /**
   * 所属基地
   */
  fromCompany: number
  /**
   * 身份证号
   */
  identityCardNo?: string
  /**
   * 本地供应商名称
   */
  name: string
  /**
   * 组织机构代码
   */
  organizationCode?: string
  /**
   * 组织id(暂时保留)
   */
  organizationId?: number
  /**
   * 护照
   */
  passport?: string
  /**
   * 状态(0-新建 1-已提交 2-审批通过 3-审批拒绝)
   */
  status?: string
  /**
   * 提交日期
   */
  submitTime: Date
  /**
   * 本地供应商编码
   */
  supplierCode?: string
  /**
   * 供应商类型(枚举Code)
   */
  supplierType: string
  /**
   * 统一社会信用代码
   */
  unifiedSocialCode?: string
}

export interface LocalSupplierUpdateDto {
  /**
   * 准入品类id
   */
  acceptedCategoryId: number
  /**
   * 地址信息
   */
  addressList?: AddressCommand[]
  /**
   * 附件信息
   */
  attachmentList?: AttachmentCommand[]
  /**
   * 银行信息
   */
  bankList?: BankCommand[]
  /**
   * 联系人信息
   */
  contactList?: ContactCommand[]
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
   * 启用状态
   */
  enableState: string
  /**
   * 所属基地
   */
  fromCompany: number
  /**
   * 本地供应商 主键 ID
   */
  id?: number
  /**
   * 身份证号
   */
  identityCardNo?: string
  /**
   * 本地供应商名称
   */
  name: string
  /**
   * 组织机构代码
   */
  organizationCode?: string
  /**
   * 组织id(暂时保留)
   */
  organizationId?: number
  /**
   * 护照
   */
  passport?: string
  /**
   * 本地供应商新增变更记录 ID
   */
  recordId?: number
  /**
   * 状态(0-新建 1-已提交 2-审批通过 3-审批拒绝)
   */
  status?: string
  /**
   * 提交日期
   */
  submitTime: Date
  /**
   * 本地供应商编码
   */
  supplierCode?: string
  /**
   * 供应商类型(枚举Code)
   */
  supplierType: string
  /**
   * 统一社会信用代码
   */
  unifiedSocialCode?: string
}

export interface LocalSupplierStatusUpdateDto {
  id: string
  status: string
}
