import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_whitelist')({
  beforeLoad: async ({ location }) => {
    if (true) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href
        }
      })
    }
  },
  component: () => <Outlet />
})
