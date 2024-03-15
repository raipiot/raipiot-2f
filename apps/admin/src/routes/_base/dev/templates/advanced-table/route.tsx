const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/dev/templates/advanced-table')({
  staticData: {
    title: () => t('DEVELOPER.TEMPLATES.ADVANCED'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: () => queryClient.ensureQueryData(Dicts.listQueryOptions(PageUtils.initParams()))
})
