import type { RpBasicFormItem, RpSearchFormItem } from '@/shared/components/RpDynamicForm/types'

export const useFormCreator = <T>() => {
  const createSearchForm = (items: RpSearchFormItem<T>[]) => items
  const createModalForm = (items: RpBasicFormItem<T>[]) => items

  return {
    createSearchForm,
    createModalForm
  }
}
