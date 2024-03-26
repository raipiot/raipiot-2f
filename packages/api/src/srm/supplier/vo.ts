import type { LifecycleStage, Page, RelegationStatus } from '../..'

export interface SupplierVo {
  /**
   * 成立日期
   */
  buildstring?: string
  /**
   * 经营范围
   */
  businessScope?: string
  /**
   * 注册市编码
   */
  cityCode?: string
  /**
   * 企业类型
   */
  companyTypeId?: string
  /**
   * 企业类型
   */
  companyTypeName?: string
  /**
   * 注册资本币种
   */
  currency?: string
  /**
   * 注册区编码
   */
  districtCode?: string
  /**
   * 邓白氏码
   */
  dunsCode?: string
  /**
   * erp供应商编码
   */
  erpCode?: string
  /**
   * 所属公司
   */
  fromCompany?: string
  /**
   * 主键 ID
   */
  id?: string
  /**
   * 主营品类
   */
  industryCategoryList?: string[]
  /**
   * 行业类型
   */
  industryTypeList?: string[]
  /**
   * 机构类型
   */
  institutionalTypeId?: string
  /**
   * 机构类型
   */
  institutionalTypeName?: string
  /**
   * 公司介绍
   */
  introduce?: string
  /**
   * 法人代表
   */
  legalRepName?: string
  /**
   * 经营期限(非长期有效时必填)
   */
  licenceEndstring?: string
  /**
   * 营业执照文件id
   */
  licenceFileId?: number
  /**
   * 经营期限长期标志
   */
  licenceLongTermFlag?: boolean
  /**
   * 生命周期阶段
   */
  lifecycleStage?: LifecycleStage
  /**
   * 公司logo文件id
   */
  logoFileId?: number
  /**
   * 企业名称
   */
  name?: string
  /**
   * 组织机构代码
   */
  organizationCode?: string
  /**
   * 注册省编码
   */
  provinceCode?: string
  /**
   * 注册地址
   */
  registeredAddress?: string
  /**
   * 注册资本
   */
  registeredCapital?: string
  /**
   * 注册国家
   */
  registeredCountry?: string
  /**
   * 送货服务范围
   */
  serviceAreaList?: string[]
  /**
   * 经营性质
   */
  serviceTypeList?: string[]
  /**
   * 纳税标识
   */
  taxpayerTypeId?: string
  /**
   * 纳税标识
   */
  taxpayerTypeName?: string
  /**
   * 统一社会信用代码
   */
  unifiedSocialCode?: string
  /**
   * 公司官网
   */
  webSite?: string
  /**
   * 默认联系人
   */
  realName?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 目标生命周期状态
   */
  targetLifecycleStage?: LifecycleStage
  /**
   * 升降级状态
   */
  relegationStatus?: RelegationStatus
}

export type SuppliersVo = Page<SupplierVo>

export interface SupplierInfoVo {
  /**
   * 成立日期
   */
  buildstring?: string
  /**
   * 经营范围
   */
  businessScope?: string
  /**
   * 注册市编码
   */
  cityCode?: string
  /**
   * 企业类型
   */
  companyTypeId?: string
  /**
   * 企业类型
   */
  companyTypeName?: string
  /**
   * 注册资本币种
   */
  currency?: string
  /**
   * 注册区编码
   */
  districtCode?: string
  /**
   * 邓白氏码
   */
  dunsCode?: string
  /**
   * erp供应商编码
   */
  erpCode?: string
  /**
   * 所属公司
   */
  fromCompany?: string
  /**
   * 主键 ID
   */
  id?: string
  /**
   * 主营品类
   */
  industryCategoryList?: string[]
  /**
   * 行业类型
   */
  industryTypeList?: string[]
  /**
   * 机构类型
   */
  institutionalTypeId?: string
  /**
   * 机构类型
   */
  institutionalTypeName?: string
  /**
   * 公司介绍
   */
  introduce?: string
  /**
   * 法人代表
   */
  legalRepName?: string
  /**
   * 经营期限(非长期有效时必填)
   */
  licenceEndstring?: string
  /**
   * 营业执照文件id
   */
  licenceFileId?: number
  /**
   * 经营期限长期标志
   */
  licenceLongTermFlag?: boolean
  /**
   * 生命周期阶段
   */
  lifecycleStage?: string
  /**
   * 公司logo文件id
   */
  logoFileId?: number
  /**
   * 企业名称
   */
  name?: string
  /**
   * 组织机构代码
   */
  organizationCode?: string
  /**
   * 注册省编码
   */
  provinceCode?: string
  /**
   * 注册地址
   */
  registeredAddress?: string
  /**
   * 注册资本
   */
  registeredCapital?: string
  /**
   * 注册国家
   */
  registeredCountry?: string
  /**
   * 送货服务范围
   */
  serviceAreaList?: string[]
  /**
   * 经营性质
   */
  serviceTypeList?: string[]
  /**
   * 纳税标识
   */
  taxpayerTypeId?: string
  /**
   * 纳税标识
   */
  taxpayerTypeName?: string
  /**
   * 统一社会信用代码
   */
  unifiedSocialCode?: string
  /**
   * 公司官网
   */
  webSite?: string

  joinTime?: string
  reason?: string
  invalidTime?: string
  creator?: string
  createTime?: string
}

export type SupplierInfosVo = Page<SupplierInfoVo>

export interface SupplierEntryVo {
  /**
   * 附件id
   */
  attachmentId?: number
  /**
   * 创建时间
   */
  createdTime?: string
  /**
   * 创建用户 ID
   */
  creatorId?: number
  /**
   * 创建用户名
   */
  creatorName?: string
  /**
   * 所属部门id
   */
  departmentId?: number
  /**
   * 录入说明
   */
  description?: string
  /**
   * 录入单号
   */
  entryNo?: string
  /**
   * 所属公司
   */
  fromCompany?: number
  /**
   * 所属公司名称
   */
  fromCompanyName?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 组织id
   */
  organizationId?: number
  /**
   * 录入状态(1-待提交-待审核3-审核中4-已发布5-已驳回6-有更新)
   */
  status?: string
  /**
   * 供应商编码
   */
  supplierCode?: string
  /**
   * 供应商Id
   */
  supplierId?: string
  /**
   * 供应商名称
   */
  supplierName?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 更新用户 ID
   */
  updateId?: number
  /**
   * 更新用户名
   */
  updateName?: string
}

export type SupplierEntriesVo = Page<SupplierEntryVo>

export interface SupplierContactVo {
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

export interface SupplierAddressVo {
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

export interface SupplierBankVo {
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

export interface SupplierInvoiceVo {
  /**
   * 开户行账号
   */
  bankAccountNum?: string
  /**
   * 开户行
   */
  bankBranchName?: string
  /**
   * 主键 ID
   */
  id?: number
  /**
   * 手机号国际区号(业务字典)
   */
  internationalTelCode?: string
  /**
   * 发票抬头
   */
  invoiceHeader?: string
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
  taxRegistrationNumber?: string
  /**
   * 税务登记电话
   */
  taxRegistrationTel?: string
}

export interface SupplierFinanceVo {
  /**
   * 币种
   */
  currency?: string
  /**
   * 流动资产(万)
   */
  currentAssets?: number
  /**
   * 流动负债(万)
   */
  currentLiabilities?: number
  /**
   * 备注
   */
  description?: string
  /**
   * 主键 ID
   */
  id?: number
  /**
   * 净利润((万)
   */
  netProfit?: number
  /**
   * 营业收入(万)
   */
  revenue?: number
  /**
   * 企业总资产(万)
   */
  totalAssets?: number
  /**
   * 总负债(万)
   */
  totalLiabilities?: number
  /**
   * 年份
   */
  year?: string
}

export interface SupplierAttachmentVo {
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
  endstring?: string
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
