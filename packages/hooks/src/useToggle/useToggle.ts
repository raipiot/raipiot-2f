import { isEqual, isFunction } from 'lodash-es'
import { useState } from 'react'

import { INVALID_PARAMS } from '../common'

export const useToggle = <T, K>({
  initialValue,
  reverseValue,
  onChange
}: {
  initialValue: T
  reverseValue: K
  onChange?: (value: T | K) => unknown
}) => {
  const [value, setValue] = useState<T | K>(initialValue)
  const toggle =
    (cb = onChange) =>
    (..._: any) => {
      setValue((prev) => {
        const newValue = isEqual(prev, initialValue) ? reverseValue : initialValue
        // 确保回调拿到的是最新的值
        if (isFunction(cb)) requestAnimationFrame(() => cb(newValue))
        return newValue
      })
    }

  return [
    value,
    toggle,
    (v: T | K | React.SetStateAction<T | K>) => {
      if (isFunction(v) || [initialValue, reverseValue].includes(v)) {
        setValue(v)
      } else {
        throw new Error(INVALID_PARAMS)
      }
    }
  ] as const
}
