import type { PropsWithChildren } from 'react'

export function PurchaserProvider(props: PropsWithChildren) {
  const authStore = useAuthStore()

  if (authStore.isPurchaser) {
    return props.children
  }

  return null
}
