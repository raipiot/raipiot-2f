import loginBg from '@/assets/images/login_bg.jpg'

import { PortalLayoutTransition } from './PortalLayoutTransition'

export function PortalLayout() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <PortalLayoutTransition>
        <Outlet />
      </PortalLayoutTransition>
    </div>
  )
}
