export const Route = createFileRoute('/_base')({
  beforeLoad: async ({ location }) => {
    if (!AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href === '/' ? undefined : location.href
        }
      })
    }
  }
})
