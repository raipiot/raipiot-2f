import type { RoleVo } from '.'

// 这个是分页的 upload dto
export interface RolesDto {
  tenantId?: string
  roleAlias?: string
  roleName?: string
}

export interface RolesSubmitDto extends RoleVo {}
