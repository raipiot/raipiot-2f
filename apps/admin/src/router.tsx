import { defaultQueryConfig } from '@raipiot-infra/tanstack-query'
import type { Fn } from '@raipiot-infra/utils'
import nprogress from 'nprogress'

import { routeTree } from './routeTree.gen'

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryConfig
})

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent', // 默认预加载策略
  defaultPreloadStaleTime: 0, // 使用外部缓存库 Tanstack Query 来管理缓存，需要设置为 0
  defaultPendingComponent: () => <div>加载中...</div>,
  defaultErrorComponent: () => <div>出错了!</div>
})

// NProgress
nprogress.configure({ showSpinner: false })
router.subscribe('onBeforeLoad', () => nprogress.start())
router.subscribe('onLoad', () => nprogress.done())

// 类型安全路由
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }

  interface StaticDataRouteOption {
    title?: string | Fn<string>
  }
}
