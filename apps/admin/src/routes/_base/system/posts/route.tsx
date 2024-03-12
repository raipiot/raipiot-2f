import { SystemDictCode, systemDictTreeQueryOptions } from '@/features/system/dicts'
import { postsQueryOptions } from '@/features/system/posts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/posts')({
  staticData: {
    title: () => t('SYSTEM.POSTS'),
    icon: <MaterialSymbolsWork />
  },
  loader: () =>
    Promise.allSettled([
      queryClient.ensureQueryData(postsQueryOptions(PageUtils.initParams())),
      queryClient.ensureQueryData(systemDictTreeQueryOptions(SystemDictCode.SYSTEM_POST))
    ])
})
