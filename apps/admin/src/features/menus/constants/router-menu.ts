import { ModuleMenuCode } from '../enums'
import type { MenuItem } from '../types'

const t = i18n.getFixedT(null, 'ROUTER')

const getRouteMeta = (key: string, children?: MenuItem[]) => {
  const { title, icon } = router.matchRoutes(key, {}).at(-1)?.staticData ?? {}
  return {
    label: I18nUtils.getText(title),
    key,
    icon,
    children
  }
}

// 兼容 i18n 所以要使用函数
export const routerMenuMap = new Map<ModuleMenuCode, () => MenuItem[]>([
  [ModuleMenuCode.DASHBOARD, () => [getRouteMeta('/')]],
  [
    ModuleMenuCode.SUPPLIER,
    () => [
      {
        label: '供应商管理',
        key: '/srm/supplier',
        children: [
          getRouteMeta('/srm/suppliers'),
          getRouteMeta('/srm/invitations'),
          getRouteMeta('/srm/supplier-entry'),
          getRouteMeta('/srm/supplier-green-channels'),
          getRouteMeta('/srm/supplier-introduce'),
          getRouteMeta('/srm/supplier-change-record'),
          getRouteMeta('/srm/supplier-blacklist')
        ]
      },
      {
        label: '资源池管理',
        key: '/srm/resource-pool',
        children: [
          getRouteMeta('/srm/resource-pool-scopes'),
          getRouteMeta('/srm/resource-pool-plans')
        ]
      },
      getRouteMeta('/srm/questionnaires'),
      {
        label: '过程管理',
        key: '/srm/process',
        children: [getRouteMeta('/srm/process/lifecycle')]
      }
    ]
  ],
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
      getRouteMeta('/system/tenants'),
      getRouteMeta('/system/perms')
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
      getRouteMeta('/dev/storybook'),
      getRouteMeta('/dev/edit-table')
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
