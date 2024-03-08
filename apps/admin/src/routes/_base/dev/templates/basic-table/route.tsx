import { systemDictsQueryOptions } from '@/features/system/dicts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/dev/templates/basic-table')({
  staticData: {
    title: () => t('DEVELOPER.TEMPLATES.BASIC'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: () => queryClient.ensureQueryData(systemDictsQueryOptions(PageUtils.initParams()))
})
