import { deptTreeQueryOptions } from '@/features/system/depts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: () => t('SYSTEM.USERS'),
    icon: <MaterialSymbolsManageAccountsRounded />
  },
  loader: async () => {
    await Promise.all([
      queryClient.ensureQueryData(Users.listQueryOptions(PageUtils.initParams())),
      queryClient.ensureQueryData(deptTreeQueryOptions())
    ])
    queryClient.ensureQueryData(Dicts.treeQueryOptions('user_type'))
  }
})
