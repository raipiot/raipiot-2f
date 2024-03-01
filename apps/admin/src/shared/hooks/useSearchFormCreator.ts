import type { RpSearchFormItem } from '@/features/form'

export const useSearchFormCreator = <T>() => {
  const responsive = useResponsive()

  const computeResponsiveSpan = () => {
    if (responsive.xxl) {
      return 4
    }
    if (responsive.lg) {
      return 6
    }
    if (responsive.sm) {
      return 8
    }
    return 12
  }

  const createSearchFormItems = (items: RpSearchFormItem<T>[]) =>
    items.map<RpSearchFormItem<T>>((item) => {
      if (item.type === 'custom') {
        return item
      }
      return {
        ...item,
        colProps: {
          span: computeResponsiveSpan(),
          ...item.colProps
        }
      }
    })

  return {
    createSearchFormItems
  }
}
