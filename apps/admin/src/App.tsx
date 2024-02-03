import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { defaultQueryConfig } from '@raipiot-infra/tanstack-query'
import { messageConfig } from '@raipiot-infra/theme'

import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient({
  defaultOptions: defaultQueryConfig
})

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <div>加载中...</div>,
  defaultErrorComponent: () => <div>出错了!</div>
})

// 类型安全路由
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  const themeStore = useThemeStore()

  const px2rem = px2remTransformer({
    rootValue: 16,
    mediaQuery: true
  })

  return (
    <QueryClientProvider client={queryClient}>
      <AConfigProvider
        theme={{
          ...(themeStore.isLightTheme() ? themeStore.lightThemeConfig : themeStore.darkThemeConfig)
        }}
      >
        <StyleProvider
          hashPriority="high"
          transformers={[px2rem]}
        >
          <AApp message={messageConfig}>
            <HappyProvider disabled={false}>
              <RouterProvider router={router} />
            </HappyProvider>
          </AApp>
        </StyleProvider>
      </AConfigProvider>
    </QueryClientProvider>
  )
}
