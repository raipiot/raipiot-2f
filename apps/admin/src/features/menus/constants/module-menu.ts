import { ModuleMenuCode } from '../enums'
import type { ModuleMenuItem } from '../types'
import { hasChildren, routerMenuMap } from './router-menu'

const t = i18n.getFixedT(null, 'ROUTER')

export const moduleMenus: ModuleMenuItem[] = [
  {
    label: () => t('MODULE.MENU.DASHBOARD'),
    key: ModuleMenuCode.DASHBOARD,
    icon: createElement(MaterialSymbolsGridViewOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.SUPPLIER'),
    key: ModuleMenuCode.SUPPLIER,
    icon: createElement(MaterialSymbolsGroupRounded)
  },
  {
    label: () => t('MODULE.MENU.SOURCE'),
    key: ModuleMenuCode.SOURCE,
    icon: createElement(MaterialSymbolsManageSearchRounded)
  },
  {
    label: () => t('MODULE.MENU.CONTRACT'),
    key: ModuleMenuCode.CONTRACT,
    icon: createElement(MaterialSymbolsContractOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.PURCHASE'),
    key: ModuleMenuCode.PURCHASE,
    icon: createElement(MaterialSymbolsLocalShippingOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.BILLING'),
    key: ModuleMenuCode.BILLING,
    icon: createElement(MaterialSymbolsPaidOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.SHOPPING'),
    key: ModuleMenuCode.SHOPPING,
    icon: createElement(MaterialSymbolsShoppingCartOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.GROUP'),
    key: ModuleMenuCode.GROUP,
    icon: createElement(MaterialSymbolsAccountTreeOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.SYSTEM'),
    key: ModuleMenuCode.SYSTEM,
    icon: createElement(MaterialSymbolsSettingsOutlineRounded)
  },
  {
    label: () => t('MODULE.MENU.DEVELOPER'),
    key: ModuleMenuCode.DEVELOPER,
    icon: createElement(MaterialSymbolsCodeRounded)
  }
]

export const getModuleMenuByPath = (path: string): ModuleMenuCode | undefined => {
  const moduleMenu = Array.from(routerMenuMap.entries()).find(([_, menuItems]) =>
    menuItems
      .flatMap((item) => [item, ...(hasChildren(item) ? item.children : [])])
      .find((item) => item?.key === path)
  )
  return moduleMenu ? moduleMenu[0] : undefined
}
