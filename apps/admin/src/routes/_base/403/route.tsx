const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/403')({
  staticData: {
    title: () => t('403'),
    icon: <MaterialSymbolsErrorCircleRounded />
  }
})
