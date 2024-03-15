import type { PropsWithChildren } from 'react'

import { BaseModalProvider } from './BaseModalProvider'

export function ModuleProvider(props: PropsWithChildren) {
  return <BaseModalProvider>{props.children}</BaseModalProvider>
}
