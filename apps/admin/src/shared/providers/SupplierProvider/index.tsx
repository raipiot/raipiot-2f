import type { PropsWithChildren } from 'react'

export function SupplierProvider(props: PropsWithChildren) {
  const authStore = useAuthStore()

  if (authStore.isSupplier) {
    return props.children
  }

  return null
}
