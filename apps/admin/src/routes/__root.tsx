import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React, { Suspense } from 'react'

import { GlobalEnvConfig } from '@/constants'

const TanStackRouterDevtools = GlobalEnvConfig.IS_PROD
  ? () => null // 生产环境下，不加载
  : React.lazy(() =>
      // 开发环境下，懒加载
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
        // 嵌入模式
        // default: res.TanStackRouterDevtoolsPanel
      }))
    )

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link
          to="/"
          className="[&.active]:font-bold"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="[&.active]:font-bold"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="[&.active]:font-bold"
        >
          Signup
        </Link>
      </div>
      <hr />

      <Outlet />

      {/* 不加 Suspense 会报错 */}
      <Suspense fallback={null}>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
})
