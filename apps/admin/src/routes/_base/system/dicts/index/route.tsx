import { systemDictsQueryOptions } from '@/features/dicts'
import { queryClient } from '@/router'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/dicts/')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICTS'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: () => queryClient.ensureQueryData(systemDictsQueryOptions(new DictPageDto()))
})
