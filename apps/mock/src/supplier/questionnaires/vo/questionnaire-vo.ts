import { MongoBaseResource } from '@/class'

export class QuestionnaireVo extends MongoBaseResource {
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
