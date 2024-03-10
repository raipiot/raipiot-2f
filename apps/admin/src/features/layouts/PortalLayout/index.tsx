import { PortalLayoutTransition } from './PortalLayoutTransition'

export function PortalLayout() {
  return (
    <PortalLayoutTransition className="h-screen !overflow-y-auto">
      <Outlet />
    </PortalLayoutTransition>
  )
}
