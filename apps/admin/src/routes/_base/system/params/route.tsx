const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/params')({
  staticData: {
    title: () => t('SYSTEM.PARAMS'),
    icon: <MaterialSymbolsChatRounded />
  }
})
