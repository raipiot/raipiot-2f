import type { ScopePageDto } from '@raipiot-2f/api'

const PERMISSIONS_QK = 'system:permissions-grant-tree'
// 权限树选项
export const permissionsQK = () => [PERMISSIONS_QK]
// 角色的权限数据
export const permissionsRoleQK = (roleIds: string) => [PERMISSIONS_QK, { roleIds }]

export const SCOPE_PERMISSIONS_QK = 'system:scope-permissions'
// scopes 的权限数据
export const scopePermissionsQK = (params: ScopePageDto, type: 'data' | 'api' = 'api') => [
  SCOPE_PERMISSIONS_QK,
  params,
  type
]

export const SCOPE_PERMISSION_QK = 'system:scope-permission'
// scope 的权限数据
export const scopePermissionQK = (id: string, type: 'data' | 'api' = 'api') => [
  SCOPE_PERMISSION_QK,
  {
    id,
    type
  }
]
