import type { PageDto } from '../../types'

export interface QuestionnairePageDto extends PageDto {}

export interface QuestionnaireSubmitDto {
  id?: string
  /**
   * 调查说明
   */
  application?: null | string
  /**
   * 公司
   */
  company?: null | string
  /**
   * 调查表管控维度
   */
  controlDimension?: null | string
  /**
   * 创建部门
   */
  createDepartment?: null | string
  /**
   * 创建人
   */
  createUser?: number | null
  /**
   * 调查表模板 ID
   */
  questionnaireTemplateId?: null | string
  /**
   * 调查表类型
   */
  questionnaireType?: null | string
  /**
   * 供应商
   */
  supplierIds?: string[] | null
}
