import { ModuleMenuCode } from '../enums'
import type { ModuleMenuItem } from '../types'

const t = i18n.getFixedT(null, 'ROUTER')

export const moduleMenus: ModuleMenuItem[] = [
  {
    title: () => t('MODULE.MENU.DASHBOARD'),
    code: ModuleMenuCode.DASHBOARD,
    icon: createElement(MaterialSymbolsGridViewOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.SUPPLIER'),
    code: ModuleMenuCode.SUPPLIER,
    icon: createElement(MaterialSymbolsGroupRounded)
  },
  {
    title: () => t('MODULE.MENU.SOURCE'),
    code: ModuleMenuCode.SOURCE,
    icon: createElement(MaterialSymbolsManageSearchRounded)
  },
  {
    title: () => t('MODULE.MENU.CONTRACT'),
    code: ModuleMenuCode.CONTRACT,
    icon: createElement(MaterialSymbolsContractOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.PURCHASE'),
    code: ModuleMenuCode.PURCHASE,
    icon: createElement(MaterialSymbolsLocalShippingOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.BILLING'),
    code: ModuleMenuCode.BILLING,
    icon: createElement(MaterialSymbolsPaidOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.SHOPPING'),
    code: ModuleMenuCode.SHOPPING,
    icon: createElement(MaterialSymbolsShoppingCartOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.GROUP'),
    code: ModuleMenuCode.GROUP,
    icon: createElement(MaterialSymbolsAccountTreeOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.SYSTEM'),
    code: ModuleMenuCode.SYSTEM,
    icon: createElement(MaterialSymbolsSettingsOutlineRounded)
  },
  {
    title: () => t('MODULE.MENU.DEVELOPER'),
    code: ModuleMenuCode.DEVELOPER,
    icon: createElement(MaterialSymbolsCodeRounded)
  }
]
