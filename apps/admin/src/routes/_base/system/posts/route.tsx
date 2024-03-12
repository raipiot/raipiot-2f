import { systemDictTreeQueryOptions } from '@/features/system/dicts'
import { SystemDictCode } from '@/features/system/dicts/enum'
import { postsQueryOptions } from '@/features/system/post'

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
