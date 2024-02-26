import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { messageConfig } from '@raipiot-infra/theme'

import { queryClient, router } from '@/router'

const px2rem = px2remTransformer({
  rootValue: 16,
  mediaQuery: true
})

export default function App() {
  const themeStore = useThemeStore()
  const langStore = useLangStore()

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
              <RpAxiosProvider>
                <Suspense fallback={null}>
                  <RouterProvider router={router} />
                </Suspense>
              </RpAxiosProvider>
            </HappyProvider>
          </AApp>
        </StyleProvider>
      </AConfigProvider>
    </QueryClientProvider>
  )
}
