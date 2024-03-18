export const useIsPurchaser = () => {
  const authStore = useAuthStore()
  return authStore.isPurchaser
}
