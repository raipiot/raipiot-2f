import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { messageConfig } from '@raipiot-infra/theme'

import { queryClient, router } from '@/router'

export default function App() {
  const themeStore = useThemeStore()
  const langStore = useLangStore()

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
        locale={langStore.locale}
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
