import type { SelectProps } from 'antd'

import { typeMap } from './maps'

export const typeOptions: SelectProps['options'] = Array.from(typeMap).map(([value, label]) => ({
  label,
  value
}))
