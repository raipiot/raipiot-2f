import type { MenuItem } from '../types'

const t = i18n.getFixedT(null, 'ROUTER')

const getRouteMeta = (key: string) => {
  const { title, icon } = router.matchRoutes(key, {}).at(-1)?.staticData ?? {}
  return {
    label: I18nUtils.getText(title),
    key,
    icon: icon ?? <MaterialSymbolsGridViewOutlineRounded />
  }
}

export const routerMenus = (): MenuItem[] => [
  getRouteMeta('/dashboard'),
  {
    label: t('MODULE.MENU.SYSTEM'),
    key: '/system',
    icon: <MaterialSymbolsSettingsOutlineRounded />,
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
    key: '/_temp',
    icon: <MaterialSymbolsGridViewOutlineRounded />,
    children: [getRouteMeta('/user-info'), getRouteMeta('/change-password')]
  },
  {
    label: t('MODULE.MENU.DEVELOPER'),
    key: '/_dev',
    icon: <MaterialSymbolsCodeRounded />,
    children: [getRouteMeta('/dev/storybook'), getRouteMeta('/dev/templates/common-table')]
  }
]
