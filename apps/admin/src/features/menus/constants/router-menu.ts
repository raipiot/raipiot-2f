import { ModuleMenuCode } from '../enums'
import type { MenuItem } from '../types'

const t = i18n.getFixedT(null, 'ROUTER')

const getRouteMeta = (key: string) => {
  const { title, icon } = router.matchRoutes(key, {}).at(-1)?.staticData ?? {}
  return {
    label: I18nUtils.getText(title),
    key,
    icon: icon ?? createElement(MaterialSymbolsGridViewOutlineRounded)
  }
}

// 兼容 i18n 所以要使用函数
export const routerMenuMap = new Map<ModuleMenuCode, () => MenuItem[]>([
  [ModuleMenuCode.DASHBOARD, () => [getRouteMeta('/dashboard')]],
  [ModuleMenuCode.SUPPLIER, () => []],
  [ModuleMenuCode.SOURCE, () => []],
  [ModuleMenuCode.CONTRACT, () => []],
  [ModuleMenuCode.PURCHASE, () => []],
  [ModuleMenuCode.BILLING, () => []],
  [ModuleMenuCode.SHOPPING, () => []],
  [ModuleMenuCode.GROUP, () => []],
  [
    ModuleMenuCode.SYSTEM,
    () => [
      getRouteMeta('/system/users'),
      getRouteMeta('/system/depts'),
      getRouteMeta('/system/posts'),
      getRouteMeta('/system/roles'),
      getRouteMeta('/system/menus'),
      getRouteMeta('/system/dicts'),
      getRouteMeta('/system/biz-dicts'),
      getRouteMeta('/system/params'),
      getRouteMeta('/system/tenants')
    ]
  ],
  [
    ModuleMenuCode.DEVELOPER,
    () => [
      {
        label: t('DEVELOPER.TEMPLATES'),
        key: '/templates',
        icon: createElement(MaterialSymbolsCodeRounded),
        children: [
          getRouteMeta('/dev/templates/basic-table'),
          getRouteMeta('/dev/templates/advanced-table')
        ]
      },
      getRouteMeta('/dev/storybook')
    ]
  ]
])

export function isMenuItem(menu: any): menu is { label: string; key: string } {
  return menu?.label !== undefined && menu?.key !== undefined
}

export function hasChildren(menu: any): menu is { children: MenuItem[] } {
  return Array.isArray(menu.children) && menu.children.length > 0
}

export function getAllMenus() {
  return Array.from(routerMenuMap.values())
    .map((menu) => menu())
    .flat()
}

export const flattenRouterLabels = (
  menus: MenuItem[] = getAllMenus(),
  parentLabel = ''
): { label: string; key: string }[] =>
  menus
    .flatMap((menu) => {
      if (isMenuItem(menu)) {
        const label = I18nUtils.getText(menu.label)
        const currentLabel = parentLabel ? `${parentLabel}/${label}` : label
        if (hasChildren(menu)) {
          return [...flattenRouterLabels(menu.children, currentLabel)]
        }
        return {
          label: currentLabel,
          key: menu.key
        }
      }
      return []
    })
    .filter((item) => item.label && item.key)

export const getRouterMenu = (key?: ModuleMenuCode) => (key ? routerMenuMap.get(key)?.() ?? [] : [])
