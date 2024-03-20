import { lazyMenuListQO } from '@/features/system/menus'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/perms/')({
  staticData: {
    title: () => t('SYSTEM.PERMISSIONS'),
    icon: <MaterialSymbolsPersonPinRounded />
  },
  loader: () =>
    queryClient.ensureQueryData(
      lazyMenuListQO({
        parentId: ''
      })
    )
})
