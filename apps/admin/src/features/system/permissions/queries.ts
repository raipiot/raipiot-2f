import { permissionsQK, permissionsRoleQK } from './query-keys'

// 角色权限树选项
export const permissionsQueryOptions = () =>
  queryOptions({
    queryKey: permissionsQK(),
    queryFn: ({ signal }) => menusAPI.grantTree(signal)
  })

// 角色的权限数据
export const permissionsRoleQueryOptions = (roleIds: string) =>
  queryOptions({
    queryKey: permissionsRoleQK(roleIds),
    queryFn: ({ signal }) => menusAPI.getRoleTreeKeys(roleIds, signal)
  })
