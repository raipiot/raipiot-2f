import { bizDictsQueryOptions } from '@/features/system/biz-dicts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/biz-dicts/')({
  staticData: {
    title: () => t('SYSTEM.BUSINESS.DICTS'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: () => queryClient.ensureQueryData(bizDictsQueryOptions(PageUtils.initParams()))
})
