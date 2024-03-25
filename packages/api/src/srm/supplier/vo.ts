import type { LifecycleStage, Page, RelegationStatus } from '../..'

export interface SupplierVo {
  /**
   * 成立日期
   */
  buildDate?: Date
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
  licenceEndDate?: Date
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
  buildDate?: Date
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
  licenceEndDate?: Date
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
