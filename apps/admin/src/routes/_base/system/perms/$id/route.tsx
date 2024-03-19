import { createFileRoute } from '@tanstack/react-router'

import { scopePermissionsQueryOptions } from '@/features/system/perms/queries'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/perms/$id')({
  staticData: {
    title: () => t('SYSTEM.PERMISSIONS.CONFIG'),
    icon: <MaterialSymbolsPersonPinRounded />
  },
  loader: ({ params, location }) => {
    const { id } = params
    const { type } = location.search as { type: 'api' | 'data' }
    return queryClient.ensureQueryData(
      scopePermissionsQueryOptions(
        {
          menuId: id,
          size: 10,
          current: 1
        },
        type
      )
    )
  }
})
