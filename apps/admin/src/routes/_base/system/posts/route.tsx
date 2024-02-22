const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/posts')({
  staticData: {
    title: () => t('SYSTEM.POSITIONS'),
    icon: <MaterialSymbolsWork />
  }
})
