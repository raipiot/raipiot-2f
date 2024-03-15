import type { PropsWithChildren } from 'react'

import { BaseModalProvider } from './BaseModalProvider'

export function DeptsProvider(props: PropsWithChildren) {
  return <BaseModalProvider>{props.children}</BaseModalProvider>
}
