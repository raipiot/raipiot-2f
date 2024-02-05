import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_whitelist')({
  beforeLoad: async ({ location }) => {
    if (true) {
      throw redirect({
        to: '',
        search: {
          redirect: location.href
        }
      })
    }
  },
  component: () => <Outlet />
})
