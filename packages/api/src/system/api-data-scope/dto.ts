import type { PageDto } from '../../types'

// 这个是分页的 upload dto
export interface ScopePageDto extends PageDto {
  scopeName?: string
  resourceCode?: string
  menuId: string
}

export interface ScopeSubmitDto {
  menuId: string
  remark: string
  resourceCode: string
  scopeName: string
  scopePath: string
  scopeType: number // 规则和接口类型
  scopeField: string // 可见字段
  scopeColumn: string // 权限字段
  scopeClass: string // 权限类名
  scopeValue: string // 规则值
}

export type ScopeTypeString = 'api' | 'data'
