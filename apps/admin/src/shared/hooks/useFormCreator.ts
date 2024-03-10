import type { RpSearchFormItem } from '@/shared/components/RpDynamicForm/types'

export const useFormCreator = <T>() => {
  const span = useResponsiveSpan()

  const createResponsiveFormItems = (items: RpSearchFormItem<T>[]) =>
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
    createResponsiveFormItems
  }
}
