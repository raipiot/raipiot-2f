const PERMISSIONS_QK = 'system:permissions-grant-tree'
// 权限树选项
export const permissionsQK = () => [PERMISSIONS_QK]
// 角色的权限数据
export const permissionsRoleQK = (roleIds: string) => [PERMISSIONS_QK, { roleIds }]
