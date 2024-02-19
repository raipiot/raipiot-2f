const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_portal/signup')({
  staticData: {
    title: () => t('SIGN.UP')
  }
})
