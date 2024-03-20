import type { Page } from '../../types'
import type { ScopeSubmitDto } from './dto'

// 单条数据 Vo, 基于提交的数据类型
export interface ScopeVo extends ScopeSubmitDto {
  /**
   * 主键
   */
  id: string
  createUser: string
  createDept: string
  createTime: string
  updateUser: string
  updateTime: string
  status: number
  isDeleted: number
  scopeTypeName: string
  scopeColumn: string // 数据权限字段
  scopeField: string // 数据权限可见字段
}

// 分页数据 Vo
export type ScopesVo = Page<ScopeVo>
