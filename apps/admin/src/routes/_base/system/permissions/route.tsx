const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/permissions')({
  staticData: {
    title: () => t('SYSTEM.PERMISSIONS'),
    icon: <MaterialSymbolsPersonPinRounded />
  }
})
