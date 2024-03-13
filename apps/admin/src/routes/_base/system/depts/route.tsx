import { deptsQueryOptions, deptTreeQueryOptions } from '@/features/system/depts'
import { SystemDictCode, systemDictTreeQueryOptions } from '@/features/system/dicts'
import { tenantsQueryOptions } from '@/features/system/tenants'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/depts')({
  staticData: {
    title: () => t('SYSTEM.DEPTS'),
    icon: <MaterialSymbolsGroupsRounded />
  },
  loader: () =>
    Promise.all([
      queryClient.ensureQueryData(deptsQueryOptions()),
      queryClient.ensureQueryData(tenantsQueryOptions({ current: 1, size: 1000 })),
      queryClient.ensureQueryData(deptTreeQueryOptions()),
      queryClient.ensureQueryData(systemDictTreeQueryOptions(SystemDictCode.ORG_CATEGORY))
    ])
})
