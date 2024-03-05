import type { PropsWithChildren } from 'react'

/**
 * Axios Provider
 * @description
 * - 用于在 React 上下文中为 Axios 拦截器注入路由、i18n、消息等实例
 * - 以便于 Axios 拦截器中可以使用响应式内容
 * - 注入前，呈现全局 Loading 动画
 */
export function AxiosProvider({ children }: PropsWithChildren) {
  const { message } = AApp.useApp()

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (initialized) {
      return
    }
    httpRequest.initInterceptors({
      router,
      i18n,
      message,
      logoutRedirectUrl: '/'
    })
    setInitialized(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!initialized) {
    return <RpGlobalLoading />
  }

  return <>{children}</>
}
