import type { ScopePageDto, ScopeTypeString } from '@raipiot-2f/api'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const t = i18n.getFixedT(null, 'ROUTER')

const validateSearch = z.object({
  type: z.enum(['api', 'data']),
  menuName: z.string().optional()
})

export const Route = createFileRoute('/_base/system/perms/$id')({
  staticData: {
    title: () => t('SYSTEM.PERMISSIONS.CONFIG'),
    icon: <MaterialSymbolsPersonPinRounded />
  },
  loader: (rawParams) => {
    const { params, location } = rawParams
    const { id } = params
    const { type } = location.search as { type: ScopeTypeString }
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
  validateSearch,
  beforeLoad: (params) => {
    if (!['api', 'data'].includes(params.search.type)) {
      throw redirect({
        to: '/system/perms/$id',
        search: {
          type: 'api'
        },
        params: {
          id: params.params.id
        }
      })
    }
  }
})
