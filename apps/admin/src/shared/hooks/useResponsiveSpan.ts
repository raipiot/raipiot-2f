interface ResponsiveSpan {
  xxl?: number
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
}

/**
 * 响应式栅格宽度
 */
export const useResponsiveSpan = (config?: ResponsiveSpan) => {
  const { xxl = 6, xl = 8, lg = 12, md = 12, sm = 24, xs = 24 } = config ?? {}

  const responsive = useResponsive()

  if (responsive.xxl) {
    return xxl
  }
  if (responsive.xl) {
    return xl
  }
  if (responsive.lg) {
    return lg
  }
  if (responsive.md) {
    return md
  }
  if (responsive.sm) {
    return sm
  }
  if (responsive.xs) {
    return xs
  }
  return 24
}
