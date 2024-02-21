const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/business-dicts')({
  staticData: {
    title: () => t('SYSTEM.BUSINESS.DICTS'),
    icon: <MaterialSymbolsBook3Rounded />
  }
})
