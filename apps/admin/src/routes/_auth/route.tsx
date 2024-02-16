export const Route = createFileRoute('/_auth')({
  beforeLoad: async () => {
    if (AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/'
      })
    }
  }
})
