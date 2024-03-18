export const useIsSupplier = () => {
  const authStore = useAuthStore()
  return authStore.isSupplier
}
