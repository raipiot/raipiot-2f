const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_portal/forgot-password')({
  staticData: {
    title: () => t('FORGOT.PASSWORD')
  }
})
