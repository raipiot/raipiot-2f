import { ModuleMenuCode } from '../enums'
import type { ModuleMenuItem } from '../types'

const t = i18n.getFixedT(null, 'ROUTER')

export const moduleMenus: ModuleMenuItem[] = [
  {
    title: () => t('MODULE.MENU.DASHBOARD'),
    code: ModuleMenuCode.DASHBOARD,
    icon: <MaterialSymbolsGridViewOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.SUPPLIER'),
    code: ModuleMenuCode.SUPPLIER,
    icon: <MaterialSymbolsGroupRounded />
  },
  {
    title: () => t('MODULE.MENU.SOURCE'),
    code: ModuleMenuCode.SOURCE,
    icon: <MaterialSymbolsManageSearchRounded />
  },
  {
    title: () => t('MODULE.MENU.CONTRACT'),
    code: ModuleMenuCode.CONTRACT,
    icon: <MaterialSymbolsContractOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.PURCHASE'),
    code: ModuleMenuCode.PURCHASE,
    icon: <MaterialSymbolsLocalShippingOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.BILLING'),
    code: ModuleMenuCode.BILLING,
    icon: <MaterialSymbolsPaidOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.SHOPPING'),
    code: ModuleMenuCode.SHOPPING,
    icon: <MaterialSymbolsShoppingCartOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.GROUP'),
    code: ModuleMenuCode.GROUP,
    icon: <MaterialSymbolsAccountTreeOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.SYSTEM'),
    code: ModuleMenuCode.SYSTEM,
    icon: <MaterialSymbolsSettingsOutlineRounded />
  },
  {
    title: () => t('MODULE.MENU.DEVELOPER'),
    code: ModuleMenuCode.DEVELOPER,
    icon: <MaterialSymbolsCodeRounded />
  }
]
