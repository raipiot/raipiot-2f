import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ScrollRestoration } from '@tanstack/react-router'
import React from 'react'

const TanStackRouterDevtools = GlobalEnvConfig.PROD_ONLY
  ? () => null // 生产环境下，不加载
  : React.lazy(() =>
      // 开发环境下，懒加载
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
      }))
    )

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Root,
  notFoundComponent: NotFoundComponent
})

function Root() {
  useDocumentTitle()

  return (
    <>
      <ScrollRestoration />
      <Outlet />

      {/* 不加 Suspense 会报错 */}
      <Suspense fallback={null}>
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  )
}

function NotFoundComponent() {
  return (
    <RpErrorPage
      title="页面或资源不存在"
      subTitle="404 - 无法找到您要访问的页面或资源"
    />
  )
}
