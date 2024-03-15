import type { PropsWithChildren } from 'react'

import { BaseModalProvider } from './BaseModalProvider'

export function RolesProvider(props: PropsWithChildren) {
  return <BaseModalProvider>{props.children}</BaseModalProvider>
}
