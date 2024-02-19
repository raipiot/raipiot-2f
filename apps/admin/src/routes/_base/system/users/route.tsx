const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: () => t('SYSTEM.USERS')
  }
})
