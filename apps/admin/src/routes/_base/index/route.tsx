import { dashboardQueryOptions } from '@/features/dashboard'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/')({
  staticData: {
    title: () => t('DASHBOARD'),
    icon: <MaterialSymbolsDashboardRounded />
  },
  loader: () => queryClient.ensureQueryData(dashboardQueryOptions())
})
