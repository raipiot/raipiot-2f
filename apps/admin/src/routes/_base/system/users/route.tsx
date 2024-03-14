import { deptTreeQueryOptions } from '@/features/system/depts'
import { SystemDictCode, systemDictTreeQueryOptions } from '@/features/system/dicts'
import { usersQueryOptions } from '@/features/system/users'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: () => t('SYSTEM.USERS'),
    icon: <MaterialSymbolsManageAccountsRounded />
  },
  loader: () => Promise.all([
      queryClient.ensureQueryData(usersQueryOptions(PageUtils.initParams())),
      queryClient.ensureQueryData(deptTreeQueryOptions()),
      queryClient.ensureQueryData(systemDictTreeQueryOptions(SystemDictCode.USER_TYPE))
    ])
})
