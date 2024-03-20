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
  id?: number
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
  licenseEndDate?: Date
  /**
   * 营业执照文件id
   */
  licenseFileId?: number
  /**
   * 经营期限长期标志
   */
  licenseLongTermFlag?: boolean
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
}
