import type { PropsWithChildren } from 'react'

import { router } from '@/router'

export default function RpAxiosProvider({ children }: PropsWithChildren) {
  const { message } = AApp.useApp()

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (initialized) {
      return
    }
    httpRequest.initInterceptors({ router, i18n, message })
    setInitialized(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!initialized) {
    return <RpGlobalLoading />
  }
  return <>{children}</>
}
