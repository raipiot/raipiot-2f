const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/')({
  staticData: {
    title: () => t('DASHBOARD')
  }
})
