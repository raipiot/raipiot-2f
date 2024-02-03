export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ location }) => {
    if (true) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href }
      })
    }
  }
})
