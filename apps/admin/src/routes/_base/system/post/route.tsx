import { systemDictTreeQueryOptions } from '@/features/system/dicts'
import { postsQueryOptions } from '@/features/system/post'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/post')({
  staticData: {
    title: () => t('SYSTEM.POST'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: () =>
    Promise.allSettled([
      queryClient.ensureQueryData(postsQueryOptions(PageUtils.initParams())),
      queryClient.ensureQueryData(systemDictTreeQueryOptions('system_post'))
    ])
})
