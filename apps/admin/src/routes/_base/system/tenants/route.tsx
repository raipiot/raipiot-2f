const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/tenants')({
  staticData: {
    title: () => t('SYSTEM.TENANTS'),
    icon: <MaterialSymbolsTrophyRounded />
  }
})
