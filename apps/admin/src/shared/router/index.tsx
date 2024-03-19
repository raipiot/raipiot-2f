import type { MaybeI18nString } from '@raipiot-infra/utils'
import nprogress from 'nprogress'
import type { JSXElementConstructor } from 'react'

import type { PermCode } from '@/shared/store/perm'

import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent', // 默认预加载策略
  defaultPreloadStaleTime: 0, // 使用外部缓存库 Tanstack Query 来管理缓存，需要设置为 0
  defaultPendingComponent: () => <RpGlobalLoading />,
  defaultErrorComponent: () => <RpErrorPage title="出错了" />
})

// NProgress
nprogress.configure({ showSpinner: false })
router.subscribe('onBeforeLoad', ({ pathChanged }) => pathChanged && nprogress.start())
router.subscribe('onLoad', () => nprogress.done())

export const getRouterStaticData = (path: string) =>
  router.matchRoutes(path, {}).at(-1)!.staticData ?? {}

// TODO: 重构，根据接口数据检查权限，注意：确保获取接口数据在路由加载之前
router.subscribe('onBeforeLoad', ({ toLocation }) => {
  const { permCode } = getRouterStaticData(toLocation.pathname)
  if (!permCode) {
    return
  }

  if (!usePermStore.getState().hasCode(...(Array.isArray(permCode) ? permCode : [permCode]))) {
    router.navigate({
      to: '/403',
      replace: true
    })
  }
})

// 类型安全路由
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }

  interface StaticDataRouteOption {
    title?: MaybeI18nString
    icon?: React.ReactElement<any, string | JSXElementConstructor<any>>
    permCode?: PermCode | PermCode[]
  }
}
