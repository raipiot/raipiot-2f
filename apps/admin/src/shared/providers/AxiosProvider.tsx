import type { PropsWithChildren } from 'react'

export function AxiosProvider({ children }: PropsWithChildren) {
  const { message } = AApp.useApp()

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (initialized) {
      return
    }
    httpRequest.initInterceptors({ router, i18n, message, logoutRedirectUrl: '/' })
    setInitialized(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!initialized) {
    return <RpGlobalLoading />
  }
  return <>{children}</>
}
