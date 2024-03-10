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

export const routerMenus = (): MenuItem[] => [
  getRouteMeta('/dashboard'),
  {
    label: t('MODULE.MENU.SYSTEM'),
    key: '/system',
    icon: createElement(MaterialSymbolsSettingsOutlineRounded),
    children: [
      getRouteMeta('/system/users'),
      getRouteMeta('/system/depts'),
      getRouteMeta('/system/posts'),
      getRouteMeta('/system/dicts'),
      getRouteMeta('/system/business-dicts'),
      getRouteMeta('/system/roles'),
      getRouteMeta('/system/params'),
      getRouteMeta('/system/tenants')
    ]
  },
  {
    label: '非菜单页面',
    key: '/temp',
    icon: createElement(MaterialSymbolsGridViewOutlineRounded),
    children: [getRouteMeta('/user-info'), getRouteMeta('/change-password')]
  },
  {
    label: t('MODULE.MENU.DEVELOPER'),
    key: '/dev',
    icon: createElement(MaterialSymbolsCodeRounded),
    children: [
      {
        label: t('DEVELOPER.TEMPLATES'),
        key: '/templates',
        icon: createElement(MaterialSymbolsCodeRounded),
        children: [getRouteMeta('/dev/templates/basic-table')]
      },
      getRouteMeta('/dev/storybook')
    ]
  }
]

function isMenuItem(menu: any): menu is { label: string; key: string } {
  return menu?.label !== undefined && menu?.key !== undefined
}

function hasChildren(menu: any): menu is { children: MenuItem[] } {
  return Array.isArray(menu.children) && menu.children.length > 0
}

export const flattenRouterLabels = (
  menus: MenuItem[] = routerMenus(),
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
