import type { Page } from '../../types'
import type { QuestionnaireState } from '.'

export interface QuestionnaireVo {
  /**
   * 审批日期
   */
  approvalDate?: string
  /**
   * 公司编码
   */
  companyCode?: string
  /**
   * 公司名称
   */
  companyName?: string
  /**
   * 调查表管控维度
   */
  controlDimension?: string
  /**
   * 创建人
   */
  createBy?: string
  /**
   * 创建部门
   */
  createDepartment?: string
  /**
   * 创建日期
   */
  createTime?: string
  /**
   * 邀约调查表
   */
  isInvitation?: boolean
  /**
   * 调查表编码
   */
  questionnaireCode?: string
  /**
   * 调查表id
   */
  questionnaireId?: string
  /**
   * 发布日期
   */
  releaseDate?: string
  /**
   * 调查表状态
   */
  state?: QuestionnaireState
  /**
   * 供应商编码
   */
  supplierCode?: string
  /**
   * 供应商名称
   */
  supplierName?: string
  /**
   * 调查表模板名称
   */
  templateName?: string
  /**
   * 调查表类型
   */
  type?: string
}

export type QuestionnairesVo = Page<QuestionnaireVo>
