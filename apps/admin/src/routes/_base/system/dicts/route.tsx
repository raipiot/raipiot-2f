import { systemDictsQueryOptions } from '@/features/system/dicts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/dicts')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICTS'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: () => queryClient.ensureQueryData(systemDictsQueryOptions(PageUtils.initParams()))
})
