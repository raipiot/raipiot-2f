import type { RpSearchFormItem } from '@/features/form'

export const useSearchFormCreator = <T>() => {
  const { computeResponsiveSpan } = useFormResponsiveSpan()

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
