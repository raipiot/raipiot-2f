const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/depts')({
  staticData: {
    title: () => t('SYSTEM.DEPTS'),
    icon: <MaterialSymbolsGroupsRounded />
  }
})
