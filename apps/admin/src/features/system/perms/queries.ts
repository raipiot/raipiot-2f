import type { ScopePageDto, ScopeTypeString } from '@raipiot-2f/api'

import {
  permissionsQK,
  permissionsRoleQK,
  scopePermissionQK,
  scopePermissionsQK
} from './query-keys'

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

// 读取 scopes 的权限数据
export const scopePermissionsQueryOptions = (params: ScopePageDto, type: 'api' | 'data') =>
  queryOptions({
    queryKey: scopePermissionsQK(params, type),
    queryFn: ({ signal }) => scopesAPI.list(params, type, signal)
  })

// 单独读取 scope 的权限数据
export const scopePermissionQueryOptions = (id: string, type: ScopeTypeString) =>
  queryOptions({
    queryKey: scopePermissionQK(id, type),
    queryFn: ({ signal }) => scopesAPI.detail(id, type, signal)
  })
