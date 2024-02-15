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
  component: Root
})

function Root() {
  const matches = useMatches()

  useEffect(() => {
    const matchedLeafItem = matches.at(-1)!.staticData.title ?? ''
    document.title = typeof matchedLeafItem === 'function' ? matchedLeafItem() : matchedLeafItem
  }, [matches])

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
