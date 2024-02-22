const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/change-password')({
  staticData: {
    title: () => t('CHANGE.PASSWORD'),
    icon: <MaterialSymbolsKeyVerticalRounded />
  }
})
