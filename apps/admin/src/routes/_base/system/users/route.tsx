import { z } from 'zod'

import { tenantsSelectQueryOptions } from '@/features/system/tenants'

const t = i18n.getFixedT(null, 'ROUTER')

const validateSearch = () =>
  z.object({
    deptId: z.string().optional()
  })

export const Route = createFileRoute('/_base/system/users')({
  staticData: {
    title: () => t('SYSTEM.USERS'),
    icon: <MaterialSymbolsManageAccountsRounded />
  },
  loader: async ({ location }) => {
    await Promise.all([
      queryClient.ensureQueryData(
        Users.listQueryOptions(
          PageUtils.initParams({ deptId: (location.search as any).deptId } as any)
        )
      ),
      queryClient.ensureQueryData(Depts.treeQueryOptions()),
      queryClient.ensureQueryData(tenantsSelectQueryOptions())
    ])
    queryClient.ensureQueryData(Dicts.treeQueryOptions('user_type'))
  },
  validateSearch
})
