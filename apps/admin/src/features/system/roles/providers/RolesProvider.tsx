import type { PropsWithChildren } from 'react'

import { BaseModalProvider } from './BaseModalProvider'
import { PermissionsProvider } from './PermissionsProvider'

export function RolesProvider(props: PropsWithChildren) {
  return (
    <BaseModalProvider>
      <PermissionsProvider>{props.children}</PermissionsProvider>
    </BaseModalProvider>
  )
}
