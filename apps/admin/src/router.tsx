import { defaultQueryConfig } from '@raipiot-infra/tanstack-query'
import nprogress from 'nprogress'

import { routeTree } from './routeTree.gen'

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryConfig
})

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <div>加载中...</div>,
  defaultErrorComponent: () => <div>出错了!</div>
})

// 处理 NProgress
nprogress.configure({ showSpinner: false })

router.subscribe('onBeforeLoad', () => nprogress.start())
router.subscribe('onLoad', () => nprogress.done())

// 类型安全路由
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
