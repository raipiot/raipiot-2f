import type { Page } from '../../types'

// 单条数据 Vo, 基于提交的数据类型
export interface RoleVo {
  /**
   * 主键
   */
  id?: string
  sort?: number
  hasChildren?: boolean
  children?: RoleVo[]
  isDeleted?: boolean
  parentId?: string
  parentName?: string
  tenantId?: string
  roleName?: string
  roleAlias?: string
}

// 分页数据 Vo
export type RolesVo = Page<RoleVo>
