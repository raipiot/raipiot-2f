export const Route = createFileRoute('/_whitelist')({
  beforeLoad: async () => {
    if (useUserStore.getState().isLogin()) {
      throw redirect({
        to: '/'
      })
    }
  }
})
