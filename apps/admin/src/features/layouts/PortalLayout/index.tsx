import { PortalLayoutTransition } from './PortalLayoutTransition'

export function PortalLayout() {
  return (
    <PortalLayoutTransition>
      <Outlet />
    </PortalLayoutTransition>
  )
}
