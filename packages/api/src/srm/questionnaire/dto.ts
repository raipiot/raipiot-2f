import type { PageDateDto } from '../../types'
import type { QuestionnaireStatus } from './enum'

export interface QuestionnairePageDto extends PageDateDto {
  /**
   * 调查表类型
   */
  questionnaireType?: string
  /**
   * 状态
   */
  status?: QuestionnaireStatus
  /**
   * 多选
   */
  lifecycle?: string[]
  /**
   * 单选
   */
  radio?: string
}

export interface QuestionnaireSubmitDto {
  id?: string
  /**
   * 调查说明
   */
  application?: string
  /**
   * 公司
   */
  company?: string
  /**
   * 调查表管控维度
   */
  controlDimension?: string
  /**
   * 创建部门
   */
  createDepartment?: string
  /**
   * 创建人
   */
  createUser?: number
  /**
   * 调查表模板 ID
   */
  questionnaireTemplateId?: string
  /**
   * 调查表类型
   */
  questionnaireType?: string
  /**
   * 供应商
   */
  supplierIds?: string[]
}
