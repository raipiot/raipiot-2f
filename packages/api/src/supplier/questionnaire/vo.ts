import type { Page } from '../../types'

export interface QuestionnaireVo {
  /**
   * 审批日期
   */
  approvalDate?: null | string
  /**
   * 公司编码
   */
  companyCode?: null | string
  /**
   * 公司名称
   */
  companyName?: null | string
  /**
   * 调查表管控维度
   */
  controlDimension?: null | string
  /**
   * 创建人
   */
  createBy?: null | string
  /**
   * 创建部门
   */
  createDepartment?: null | string
  /**
   * 创建日期
   */
  createTime?: null | string
  /**
   * 邀约调查表
   */
  isInvitation?: boolean | null
  /**
   * 调查表编码
   */
  questionnaireCode?: null | string
  /**
   * 调查表id
   */
  questionnaireId?: null | string
  /**
   * 发布日期
   */
  releaseDate?: null | string
  /**
   * 调查表状态
   */
  state?: null | string
  /**
   * 供应商编码
   */
  supplierCode?: null | string
  /**
   * 供应商名称
   */
  supplierName?: null | string
  /**
   * 调查表模板名称
   */
  templateName?: null | string
  /**
   * 调查表类型
   */
  type?: null | string
}

export type QuestionnairesVo = Page<QuestionnaireVo>
