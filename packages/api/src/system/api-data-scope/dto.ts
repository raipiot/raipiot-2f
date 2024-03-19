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
  scopeType: number // 暂无文档
}

export type ScopeTypeString = 'api' | 'data'
