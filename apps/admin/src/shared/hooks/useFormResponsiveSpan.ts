export const useFormResponsiveSpan = () => {
  const sidebarStore = useSidebarStore()
  const responsive = useResponsive()

  const computeResponsiveSpan = () => {
    if (responsive.xxl) {
      return sidebarStore.isDisplay ? 6 : 4
    }
    if (responsive.xl) {
      return sidebarStore.isDisplay ? 8 : 6
    }
    if (responsive.lg) {
      return sidebarStore.isDisplay ? 12 : 8
    }
    if (responsive.md) {
      return 12
    }
    return 24
  }

  return {
    computeResponsiveSpan
  }
}
