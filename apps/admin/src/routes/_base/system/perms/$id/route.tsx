import type { ScopePageDto } from '@raipiot-2f/api'
import { createFileRoute } from '@tanstack/react-router'
import { merge } from 'lodash-es'
import { z } from 'zod'

const t = i18n.getFixedT(null, 'ROUTER')

const validateSearch = z.object({
  type: z.enum(['api', 'data']),
  menuName: z.string()
})

export const Route = createFileRoute('/_base/system/perms/$id')({
  staticData: {
    title: () => t('SYSTEM.PERMISSIONS.CONFIG'),
    icon: <MaterialSymbolsPersonPinRounded />
  },
  loader: ({ params, location }) => {
    const { id } = params
    const { type } = merge(location.search, { type: 'data' }) as { type: 'api' | 'data' }

    return Promise.all([
      queryClient.ensureQueryData(
        Perms.scopePermissionsQueryOptions(
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
  },
  validateSearch
})
