const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/dev/templates/basic-table')({
  staticData: {
    title: () => t('DEVELOPER.TEMPLATES.BASIC')
  }
})
