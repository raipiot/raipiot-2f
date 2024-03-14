import { usersQueryOptions } from '@/features/system/users'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: () => t('SYSTEM.USERS'),
    icon: <MaterialSymbolsManageAccountsRounded />
  },
  loader: () => queryClient.ensureQueryData(usersQueryOptions(PageUtils.initParams()))
})
