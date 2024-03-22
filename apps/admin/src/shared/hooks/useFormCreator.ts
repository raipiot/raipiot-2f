import type {
  RpBasicFormItemProps,
  RpSearchFormItemProps
} from '@/shared/components/RpFormItem/types'

export const useFormCreator = <T>() => {
  const createSearchForm = (items: RpSearchFormItemProps<T>[]) => items
  const createModalForm = (items: RpBasicFormItemProps<T>[]) => items

  return {
    createSearchForm,
    createModalForm
  }
}
