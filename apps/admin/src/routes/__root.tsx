import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ScrollRestoration } from '@tanstack/react-router'
import React from 'react'

import { GlobalEnvConfig } from '@/constants'

const TanStackRouterDevtools = GlobalEnvConfig.IS_PROD
  ? () => null // 生产环境下，不加载
  : React.lazy(() =>
      // 开发环境下，懒加载
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
      }))
    )

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Root,
  notFoundComponent: NotFound
})

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />

      {/* 不加 Suspense 会报错 */}
      <Suspense fallback={null}>
        <ReactQueryDevtools buttonPosition="top-right" />
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  )
}

function NotFound() {
  return (
    <div className="container absolute inset-0 m-auto flex size-fit flex-col items-center space-y-6">
      <span className="text-2xl font-bold sm:text-4xl">出错了</span>
      <span className="text-base font-medium sm:text-xl">无法找到您要访问的页面</span>
      <Link to="/login">
        <AButton type="primary">返回首页</AButton>
      </Link>
    </div>
  )
}
