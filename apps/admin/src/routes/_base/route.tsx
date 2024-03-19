import { getRouterStaticData } from '@/shared/router'

export const Route = createFileRoute('/_base')({
  beforeLoad: async (params) => {
    const { location } = params
    // 身份校验
    if (!AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href === '/' ? undefined : location.href
        }
      })
    }
    // 权限校验
    const { permCode } = getRouterStaticData(location.pathname)
    if (
      permCode &&
      !usePermStore.getState().hasCode(...(Array.isArray(permCode) ? permCode : [permCode]))
    ) {
      throw redirect({
        to: '/403',
        replace: true
      })
    }
  },
  loader: () => queryClient.ensureQueryData(Users.infoQueryOptions())
})
