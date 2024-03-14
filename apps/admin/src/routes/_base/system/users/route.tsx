import { deptTreeQueryOptions } from '@/features/system/depts'
import { usersQueryOptions } from '@/features/system/users'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: () => t('SYSTEM.USERS'),
    icon: <MaterialSymbolsManageAccountsRounded />
  },
  loader: async () => {
    await Promise.all([
      queryClient.ensureQueryData(usersQueryOptions(PageUtils.initParams())),
      queryClient.ensureQueryData(deptTreeQueryOptions())
    ])
  }
})
