import type { PropsWithChildren } from 'react'

import { BaseModalProvider } from './BaseModalProvider'
import { PlatformModalProvider } from './PlatformModalProvider'

export function UsersProvider(props: PropsWithChildren) {
  return (
    <BaseModalProvider>
      <PlatformModalProvider>{props.children}</PlatformModalProvider>
    </BaseModalProvider>
  )
}
