import { createFileRoute } from '@tanstack/react-router'

import { portalInfoQueryOptions } from '@/features/portal/queries'
import { userInfoQueryOptions } from '@/features/users'

export const Route = createFileRoute('/_portal/')({
  loader: () =>
    Promise.allSettled([
      queryClient.ensureQueryData(portalInfoQueryOptions),
      AuthUtils.isAuthenticated() ? queryClient.ensureQueryData(userInfoQueryOptions) : null
    ])
})
