export const Route = createFileRoute('/_portal')({
  beforeLoad: async () => {
    if (AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/'
      })
    }
  }
})
