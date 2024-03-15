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
  loader: () => queryClient.ensureQueryData(Users.infoQueryOptions())
})
