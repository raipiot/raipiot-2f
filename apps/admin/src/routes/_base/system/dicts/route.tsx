const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/dicts')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICT')
  }
})
