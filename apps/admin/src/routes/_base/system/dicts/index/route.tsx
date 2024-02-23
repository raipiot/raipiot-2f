import { systemDictsQueryOptions } from '@/features/system/dicts'
import { queryClient } from '@/router'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/dicts/')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICTS'),
    icon: <MaterialSymbolsBook2Rounded />,
    hideTitle: true
  },
  loader: () => queryClient.ensureQueryData(systemDictsQueryOptions(new DictPageDto()))
})
