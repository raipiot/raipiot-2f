const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/404')({
  staticData: {
    title: () => t('404'),
    icon: <MaterialSymbolsErrorCircleRounded />
  }
})
