const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/roles')({
  staticData: {
    title: () => t('SYSTEM.ROLES'),
    icon: <MaterialSymbolsShieldPersonRounded />
  }
})
