import { useDashboardQueryOptions } from '@/features/dashboard/queries'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/dashboard')({
  staticData: {
    title: () => t('DASHBOARD'),
    icon: <MaterialSymbolsDashboardRounded />
  },
  loader: () => queryClient.ensureQueryData(useDashboardQueryOptions)
})
