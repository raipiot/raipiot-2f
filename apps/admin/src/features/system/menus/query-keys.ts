import type { LazyMenuPageDto } from '@raipiot-2f/api'

export const MENUS_QK = 'system:menus'

export const MENU_QK = 'system:menu'

export const MENU_TREE_QK = 'system:menu:tree'

export const menusQK = (params?: LazyMenuPageDto) => [MENUS_QK, params]

export const menuQK = (id?: string) => [MENU_QK, { id }]

export const menuTreeQK = () => [MENU_TREE_QK]
