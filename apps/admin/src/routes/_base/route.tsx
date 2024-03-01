import { userInfoQueryOptions } from '@/features/users'

export const Route = createFileRoute('/_base')({
  beforeLoad: async (params) => {
    const { location } = params
    if (!AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href === '/' ? undefined : location.href
        }
      })
    }
  },
  loader: () => queryClient.ensureQueryData(userInfoQueryOptions),
  onEnter: (match) => {
    console.log('进入基础布局页面', match)
  },
  onLeave: (match) => {
    console.log('离开基础布局页面', match)
  }
})
