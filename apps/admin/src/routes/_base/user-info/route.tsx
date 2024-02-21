const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/user-info')({
  staticData: {
    title: () => t('USER.INFO'),
    icon: <MaterialSymbolsAccountCircle />
  }
})
