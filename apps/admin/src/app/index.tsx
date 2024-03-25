import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { messageConfig, themeBaseToken } from '@raipiot-infra/theme'
import { enableMapSet } from 'immer'

import { getModuleMenuCodeByPath } from '@/features/menus'

enableMapSet()

BrowserUtils.loadFavicon() // 动态加载 favicon
BrowserUtils.disableGestureScale() // 禁用移动端手势缩放
// 静态方法的全局配置
AMessage.config(messageConfig)

// px2rem 转换器
const px2rem = px2remTransformer({
  rootValue: 16,
  mediaQuery: true
})

// useResponsive 配置，同步 Tailwind CSS 的断点
configResponsive({
  xs: themeBaseToken.screenXSMin!,
  sm: themeBaseToken.screenSMMin!,
  md: themeBaseToken.screenMDMin!,
  lg: themeBaseToken.screenLGMin!,
  xl: themeBaseToken.screenXLMin!,
  xxl: themeBaseToken.screenXXLMin!
})

export default function App() {
  const themeStore = useThemeStore()
  const langStore = useLangStore()
  const menuStore = useMenuStore()

  // 路由变化时切换模块菜单
  router.subscribe('onLoad', () => {
    const moduleMenuCode = getModuleMenuCodeByPath(router.state.location.pathname)
    if (moduleMenuCode) {
      menuStore.setActiveModuleMenuCode(moduleMenuCode)
    }
  })

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
