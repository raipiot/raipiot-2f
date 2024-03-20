import type { ScopePageDto } from '@raipiot-2f/api'
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

    return Promise.all([
      queryClient.ensureQueryData(
        scopePermissionsQueryOptions(
          PageUtils.initParams<ScopePageDto>({
            menuId: id
          }),
          type
        )
      ),
      queryClient.ensureQueryData(
        Dicts.directoryQueryOptions(type === 'api' ? 'api_scope_type' : 'data_scope_type')
      )
    ])
  }
})
