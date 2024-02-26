import { userInfoQueryOptions } from '@/features/users'

export const Route = createFileRoute('/_base')({
  beforeLoad: async (params) => {
    const { location } = params
    if (!AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href === '/' ? undefined : location.href
        }
      })
    }
  },
  loader: () => queryClient.ensureQueryData(userInfoQueryOptions)
})
