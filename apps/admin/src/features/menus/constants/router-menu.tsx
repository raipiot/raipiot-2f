import type { MenuItem } from '../types'

const t = i18n.getFixedT(null, 'ROUTER')

export const routerMenus = (): MenuItem[] => [
  {
    label: t('DASHBOARD'),
    key: '/',
    icon: <MaterialSymbolsGridViewOutlineRounded />
  },
  {
    label: t('MODULE.MENU.SYSTEM'),
    key: '/system',
    icon: <MaterialSymbolsGridViewOutlineRounded />,
    children: [
      {
        label: t('SYSTEM.USERS'),
        key: '/system/users',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.DEPT'),
        key: '/system/dept',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.POSITION'),
        key: '/system/positions',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.SYSTEM.DICT'),
        key: '/system/dicts',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.BUSINESS.DICT'),
        key: '/system/business-dicts',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.PERMISSIONS'),
        key: '/system/permissions',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.PARAMS'),
        key: '/system/params',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('SYSTEM.TENANT'),
        key: '/system/tenants',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      }
    ]
  },
  {
    label: 'Temp',
    key: '/_temp',
    icon: <MaterialSymbolsGridViewOutlineRounded />,
    children: [
      {
        label: t('CHANGE.PASSWORD'),
        key: '/change-password',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      },
      {
        label: t('USER.INFO'),
        key: '/user-info',
        icon: <MaterialSymbolsGridViewOutlineRounded />
      }
    ]
  }
]
