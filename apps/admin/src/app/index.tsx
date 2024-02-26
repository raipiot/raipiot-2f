import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { messageConfig } from '@raipiot-infra/theme'

import { AxiosProvider } from './providers'

BrowserUtils.loadFavicon() // 动态加载 favicon
BrowserUtils.disableGestureScale() // 禁用移动端手势缩放

// 静态方法的全局配置
AMessage.config(messageConfig)

// px2rem 转换器
const px2rem = px2remTransformer({
  rootValue: 16,
  mediaQuery: true
})

export default function App() {
  const themeStore = useThemeStore()
  const langStore = useLangStore()

  return (
    <>
      {/* Tanstack Query */}
      <QueryClientProvider client={queryClient}>
        {/* antd 全局配置 */}
        <AConfigProvider
          theme={{
            ...(themeStore.isLightTheme()
              ? themeStore.lightThemeConfig
              : themeStore.darkThemeConfig)
          }}
          locale={langStore.locale}
        >
          {/* antd 全局样式 */}
          <StyleProvider
            hashPriority="high"
            transformers={[px2rem]}
          >
            {/* antd 全局消息配置 */}
            <AApp message={messageConfig}>
              {/* antd 快乐主题配置 */}
              <HappyProvider disabled={false}>
                {/* Axios 拦截器挂载 */}
                <AxiosProvider>
                  <Suspense fallback={null}>
                    {/* Tanstack Router */}
                    <RouterProvider router={router} />
                  </Suspense>
                </AxiosProvider>
              </HappyProvider>
            </AApp>
          </StyleProvider>
        </AConfigProvider>
      </QueryClientProvider>
    </>
  )
}
