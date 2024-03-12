import type { Page } from '../../types'

export interface SystemDictVo {
  children?: SystemDictVo[]
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
  hasChildren?: boolean
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 是否已封存
   */
  isSealed?: number
  parentId?: string
  parentName?: string
  /**
   * 字典备注
   */
  remark?: string
  /**
   * 排序
   */
  sort?: number
}

export type SystemDictsVo = Page<SystemDictVo>
