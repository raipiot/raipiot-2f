const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/dashboard')({
  staticData: {
    title: () => t('DASHBOARD'),
    icon: <MaterialSymbolsDashboardRounded />
  }
})
