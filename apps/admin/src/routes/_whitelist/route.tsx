export const Route = createFileRoute('/_whitelist')({
  beforeLoad: async () => {
    if (AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/'
      })
    }
  }
})
