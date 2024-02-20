//
import { useState } from 'react'

/**
 * Custom hook that provides a boolean state value and a toggle function.
 *
 * @param initialValue - The initial value of the boolean state.
 * @param cb - An optional callback function that will be called with the new value whenever the state is toggled.
 * @returns A tuple containing the boolean state value, the toggle function, and the state setter function.
 */
export const useBoolean = (initialValue?: boolean, cb?: (newValue?: boolean) => unknown) => {
  const [value, setValue] = useState(!!initialValue)

  const toggle = (..._: any) => {
    setValue((prev) => {
      // 让 UI 先更新
      requestAnimationFrame(() => cb?.(!prev))
      return !prev
    })
  }

  return [value, toggle, setValue] as const
}
