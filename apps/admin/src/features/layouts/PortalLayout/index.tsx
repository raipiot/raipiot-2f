import { PortalLayoutTransition } from './PortalLayoutTransition'

export function PortalLayout() {
  return (
    <PortalLayoutTransition className="overflow-x-hidden">
      <Outlet />
    </PortalLayoutTransition>
  )
}
