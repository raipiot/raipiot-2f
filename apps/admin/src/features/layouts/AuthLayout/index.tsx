import loginBg from '@/assets/img/login_bg.jpg'

import { AuthLayoutTransition } from './AuthLayoutTransition'

export function AuthLayout() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <AuthLayoutTransition>
        <Outlet />
      </AuthLayoutTransition>
    </div>
  )
}
