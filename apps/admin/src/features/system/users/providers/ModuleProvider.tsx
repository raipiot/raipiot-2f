import type { PropsWithChildren } from 'react'

import { BaseModalProvider } from './BaseModalProvider'
import { PlatformModalProvider } from './PlatformModalProvider'

export function ModuleProvider(props: PropsWithChildren) {
  return (
    <BaseModalProvider>
      <PlatformModalProvider>{props.children}</PlatformModalProvider>
    </BaseModalProvider>
  )
}
