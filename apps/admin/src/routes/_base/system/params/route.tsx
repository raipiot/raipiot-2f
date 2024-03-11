import { paramsQueryOptions } from '@/features/system/params'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/params')({
  staticData: {
    title: () => t('SYSTEM.PARAMS'),
    icon: <MaterialSymbolsChatRounded />
  },
  loader: () => queryClient.ensureQueryData(paramsQueryOptions(PageUtils.initParams()))
})
