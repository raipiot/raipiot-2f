import type { RpSearchFormItem } from '@/features/forms'

export const useSearchFormCreator = <T>() => {
  const span = useResponsiveSpan()

  const createSearchFormItems = (items: RpSearchFormItem<T>[]) =>
    items.map<RpSearchFormItem<T>>((item) => {
      if (item.type === 'custom') {
        return item
      }
      return {
        ...item,
        colProps: {
          span,
          ...item.colProps
        }
      }
    })

  return {
    createSearchFormItems
  }
}
