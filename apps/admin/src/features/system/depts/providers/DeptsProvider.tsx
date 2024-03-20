import type { PropsWithChildren } from 'react'

import { BaseContext } from '../context'
import { BaseModalProvider } from './BaseModalProvider'

export function DeptsProvider(props: PropsWithChildren) {
  const [disabledParentId, setDisabledParentId] = useState(false)
  const value = useMemo(() => ({ disabledParentId, setDisabledParentId }), [disabledParentId])
  return (
    <BaseContext.Provider value={value}>
      <BaseModalProvider>{props.children}</BaseModalProvider>
    </BaseContext.Provider>
  )
}
