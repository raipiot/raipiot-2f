import { createFileRoute } from '@tanstack/react-router'

import { portalInfoQueryOptions } from '@/features/portal/queries'
import { userInfoQueryOptions } from '@/features/system/users'

export const Route = createFileRoute('/_portal/')({
  loader: async () => {
    if (!AuthUtils.isAuthenticated()) {
      await queryClient.ensureQueryData(portalInfoQueryOptions())
    } else {
      await Promise.allSettled([
        queryClient.ensureQueryData(portalInfoQueryOptions()),
        queryClient.ensureQueryData(userInfoQueryOptions())
      ])
    }
  }
})
