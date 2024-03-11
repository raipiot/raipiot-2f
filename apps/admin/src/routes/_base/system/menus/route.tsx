import { menusQueryOptions, menuTreeQueryOptions } from '@/features/system/menus'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/menus')({
  staticData: {
    title: () => t('SYSTEM.MENUS'),
    icon: <MaterialSymbolsListAltOutlineRounded />
  },
  loader: async () => {
    await queryClient.ensureQueryData(menusQueryOptions({ parentId: '0' }))
    await queryClient.ensureQueryData(menuTreeQueryOptions())
  }
})
