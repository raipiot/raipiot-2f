import type { PageDto } from '../../types'

export interface BizDictPageDto extends PageDto {
  code?: string
  dictValue?: string
}

export interface BizDictValuePageDto extends BizDictPageDto {
  parentId: string
}

export interface BizDictSubmitDto {
  /**
   * 字典码
   */
  code?: string
  /**
   * 字典值
   */
  dictKey?: string
  /**
   * 字典名称
   */
  dictValue?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 是否已封存
   */
  isSealed?: number
  /**
   * 父主键
   */
  parentId?: string
  /**
   * 字典备注
   */
  remark?: string
  /**
   * 排序
   */
  sort?: number
}
