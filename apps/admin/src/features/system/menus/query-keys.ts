import type { LazyMenuPageDto } from '@raipiot-2f/api'

export const MENUS_QK = 'system:menus'

export const MENU_QK = 'system:menu'

export const MENU_TREE_QK = 'system:menu:tree'

export const MENU_GRANT_TREE_QK = 'system:menu:grant-tree'

export const MENU_ROLE_TREE_KEYS_QK = 'system:menu:role-tree-keys'

export const menusQK = (params?: LazyMenuPageDto) => [MENUS_QK, params]

export const menuQK = (id?: string) => [MENU_QK, { id }]

export const menuTreeQK = () => [MENU_TREE_QK]

export const menuGrantTreeQK = () => [MENU_GRANT_TREE_QK]

export const menuRoleGrantTreeQK = (roleIds: string) => [MENU_ROLE_TREE_KEYS_QK, { roleIds }]
