import { isEqual } from 'lodash-es'
import { useState } from 'react'

/**
 * Custom hook that provides a toggle functionality.
 *
 * @template T - The type of the value being toggled.
 * @param {Object} options - The options for the toggle hook.
 * @param {T} options.initialValue - The initial value of the toggle.
 * @param {T} options.reverseValue - The value to toggle to when the current value is equal to the initial value.
 * @param {(value: T) => unknown} [options.onChange] - Optional callback function to be called when the value is toggled.
 * @returns {[T, () => void, React.Dispatch<React.SetStateAction<T>>]} - A tuple containing the current value, a function to toggle the value, and a function to set the value.
 */
export const useToggle = <T>({
  initialValue,
  reverseValue,
  onChange
}: {
  initialValue: T
  reverseValue: T
  onChange?: (value: T) => unknown
}) => {
  const [value, setValue] = useState(initialValue)
  const toggle = (..._: any) => {
    setValue((prev) => {
      const newValue = isEqual(prev, initialValue) ? reverseValue : initialValue
      // 让 UI 先更新，然后在下一个事件循环执行回调
      requestAnimationFrame(() => onChange?.(newValue))
      return newValue
    })
  }
  return [value, toggle, setValue] as const
}
