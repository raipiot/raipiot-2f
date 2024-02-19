import type { ModuleMenuItem } from '../types'

export const moduleMenus: ModuleMenuItem[] = [
  {
    name: '仪表盘',
    code: 'dashboard',
    icon: <MaterialSymbolsGridViewOutlineRounded />
  },
  {
    name: '供应商',
    code: 'supplier',
    icon: <MaterialSymbolsGroupRounded />
  },
  {
    name: '寻源',
    code: 'origin',
    icon: <MaterialSymbolsManageSearchRounded />
  },
  {
    name: '合同',
    code: 'contract',
    icon: <MaterialSymbolsContractOutlineRounded />
  },
  {
    name: '采购',
    code: 'purchase',
    icon: <MaterialSymbolsLocalShippingOutlineRounded />
  },
  {
    name: '结算',
    code: 'checkout',
    icon: <MaterialSymbolsPaidOutlineRounded />
  },
  {
    name: '商城',
    code: 'shopping',
    icon: <MaterialSymbolsShoppingCartOutlineRounded />
  },
  {
    name: '集团',
    code: 'group',
    icon: <MaterialSymbolsAccountTreeOutlineRounded />
  },
  {
    name: '系统',
    code: 'system',
    icon: <MaterialSymbolsSettingsOutlineRounded />
  }
]
