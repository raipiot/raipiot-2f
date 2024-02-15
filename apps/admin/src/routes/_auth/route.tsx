export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ location }) => {
    if (!useUserStore.getState().isLogin()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href === '/' ? undefined : location.href
        }
      })
    }
  }
})
