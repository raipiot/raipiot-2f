import type { PageDateDto, PageDto } from '../..'

export interface SupplierPageDto extends PageDto {
  queryDimension?: string
  companyName?: string
  baseId?: string
  lifecycleStageList?: string[]
  material?: string
  categoryState?: string
}

export interface SupplierBlackListPageDto extends PageDto {
  companyName?: string
  reason?: string
}

export interface SupplierEntryPageDto extends PageDto {
  supplierName?: string
  fromCompany?: string
  status?: string
}

export interface SupplierEntryCreateDto {
  id: string
  status: string
}

export interface SupplierEntryMainInfoSubmitDto {
  /**
   * 成立日期
   */
  buildDate: Date
  /**
   * 经营范围
   */
  businessScope?: string
  /**
   * 注册市编码
   */
  cityCode: string
  /**
   * 企业类型（字典）
   */
  companyType: string
  /**
   * 注册资本币种
   */
  currency: string
  /**
   * 注册区编码
   */
  districtCode: string
  /**
   * 邓白氏码
   */
  dunsCode?: string
  /**
   * 供应商信息主键
   */
  id?: string
  /**
   * 机构类型
   */
  institutionalType: string
  /**
   * 法人代表
   */
  legalRepName: string
  /**
   * 经营期限(非长期有效时必填)
   */
  licenceEndDate?: Date
  /**
   * 营业执照文件id
   */
  licenceFileId?: string
  /**
   * 经营期限长期标志
   */
  licenceLongTermFlag: boolean
  /**
   * 企业名称
   */
  name: string
  /**
   * 组织机构代码
   */
  organizationCode?: string
  /**
   * 注册省编码
   */
  provinceCode: string
  /**
   * 注册地址
   */
  registeredAddress: string
  /**
   * 注册资本
   */
  registeredCapital: string
  /**
   * 注册国家
   */
  registeredCountry: string
  /**
   * 注册国家编码（字典）
   */
  registeredCountryCode: string
  /**
   * 供应商主键
   */
  supplierid?: string
  /**
   * 纳税标识（字典）
   */
  taxpayerType: string
  /**
   * 统一社会信用代码
   */
  unifiedSocialCode: string
}

export interface SupplierEntrySecondaryInfoSubmitDto {
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
   * 财务信息
   */
  financeList?: FinanceCommand[]
  /**
   * 供应商信息主键
   */
  id: string
  /**
   * 主营品类（字典）
   */
  industryCategoryList: string[]
  /**
   * 行业类型（字典）
   */
  industryTypeList: string[]
  /**
   * 公司介绍
   */
  introduce?: string
  invoice?: InvoiceCommand
  /**
   * 公司logo文件id
   */
  logoFileId?: string
  /**
   * 送货服务范围（字典）
   */
  serviceAreaList: string[]
  /**
   * 经营性质（字典）
   */
  serviceTypeList: string[]
  /**
   * 供应商主键
   */
  supplierid?: string
  /**
   * 公司官网
   */
  webSite?: string
}

export interface AddressCommand {
  /**
   * 经营地址
   */
  businessAddress: string
  /**
   * 市编码
   */
  cityCode: string
  /**
   * 国家地区
   */
  country: string
  /**
   * 地址备注
   */
  description?: string
  /**
   * 区编码
   */
  districtCode: string
  /**
   * 是否启用
   */
  enabledFlag: boolean
  /**
   * 邮政编码
   */
  postCode?: string
  /**
   * 省编码
   */
  provinceCode: string
}

export interface AttachmentCommand {
  /**
   * 附件文件ID
   */
  attachmentFileId: string
  /**
   * 附件类型
   */
  attachmentType: string
  /**
   * 附件描述
   */
  description?: string
  /**
   * 附件到期日期
   */
  endDate: Date
  /**
   * 是否长期有效
   */
  longEffectiveFlag: boolean
  /**
   * 备注
   */
  remark?: string
  /**
   * 子附件类型
   */
  subAttachmentType: string
}

export interface BankCommand {
  /**
   * 账户名称
   */
  bankAccountName: string
  /**
   * 银行账户
   */
  bankAccountNum: string
  /**
   * 开户行名称
   */
  bankBranchName: string
  /**
   * 银行(国际)代码
   */
  bankCode: string
  /**
   * 联行行号
   */
  bankFirm: string
  /**
   * 银行名称
   */
  bankName: string
  /**
   * 国家地区
   */
  country: string
  /**
   * 备注
   */
  description?: string
  /**
   * 是否启用
   */
  enabledFlag: boolean
  /**
   * 主账号标识
   */
  masterFlag: boolean
}

export interface ContactCommand {
  /**
   * 是否默认
   */
  defaultFlag: boolean
  /**
   * 部门
   */
  departmentId?: string
  /**
   * 备注
   */
  description?: string
  /**
   * 电子邮箱
   */
  email: string
  /**
   * 是否启用
   */
  enabledFlag: boolean
  /**
   * 手机号国际区号
   */
  internationalTelCode: string
  /**
   * 手机号
   */
  mobilePhone: string
  /**
   * 姓名
   */
  name: string
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

export interface FinanceCommand {
  /**
   * 币种
   */
  currency: string
  /**
   * 流动资产(万)
   */
  currentAssets?: string
  /**
   * 流动负债(万)
   */
  currentLiabilities?: string
  /**
   * 备注
   */
  description?: string
  /**
   * 净利润((万)
   */
  netProfit?: string
  /**
   * 营业收入(万)
   */
  revenue?: string
  /**
   * 企业总资产(万)
   */
  totalAssets: string
  /**
   * 总负债(万)
   */
  totalLiabilities?: string
  /**
   * 年份
   */
  year: string
}

export interface InvoiceCommand {
  /**
   * 开户行账号
   */
  bankAccountNum: string
  /**
   * 开户行
   */
  bankBranchName?: string
  /**
   * 手机号国际区号
   */
  internationalTelCode?: string
  /**
   * 发票抬头
   */
  invoiceHeader: string
  /**
   * 收票人
   */
  receiver?: string
  /**
   * 收票地址
   */
  receiverAddress?: string
  /**
   * 收票邮箱
   */
  receiverMail?: string
  /**
   * 收票人手机号
   */
  receiverPhone?: string
  /**
   * 税务登记地址
   */
  taxRegistrationAddress?: string
  /**
   * 税务登记号
   */
  taxRegistrationNumber: string
  /**
   * 税务登记电话
   */
  taxRegistrationTel?: string
}

export interface SupplierEntryCooperateInfoSubmitDto {
  /**
   * 准入品类
   */
  acceptedCategory: string
  /**
   * 采购策略负责人
   */
  buyStrategyHead?: number
  /**
   * 合作说明
   */
  cooperationDescription?: string
  /**
   * 邀请方公司
   */
  fromCompany?: number
  /**
   * 是否集团级标志(0-否 1-是)
   */
  groupLevelFlag?: string
  /**
   * 生命周期阶段(不一定要前端传)
   */
  lifecycleStage?: string
  /**
   * 供应商主键 ID
   */
  id: string
}

export interface SupplierEntryCheckSocialCodeDto {
  name?: string
  unifiedSocialCode?: string
}

export interface SupplierIntroPageDto extends PageDateDto {
  requestNo?: string
  creatorName?: string
}

export interface SupplierIntroCreateDto {
  supplierIds: string[]
  targetBaseIds: string[]
}

export interface SupplierIntroUpdateDto {
  addSupplierIds?: string[]
  addTargetBaseIds?: string[]
  deleteSupplierIds?: string[]
  deleteTargetBaseIds?: string[]
  id: string
}

export interface SupplierIntroUpdateStatusDto {
  id: string
  status: string
}

export interface SupplierVerifyInfoDto {
  supplierId: string
  supplierVerifyList?: SupplierVerifyListItem[]
}

export interface SupplierVerifyListItem {
  configType?: string
  configValue?: string
}
