const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/500')({
  staticData: {
    title: () => t('500')
  }
})
