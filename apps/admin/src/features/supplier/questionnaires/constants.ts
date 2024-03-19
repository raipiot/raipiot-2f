import type { SelectProps } from 'antd'

export const multiOptions: SelectProps['options'] = [
  { label: '注册', value: '1' },
  { label: '推荐', value: '2' },
  { label: '潜在', value: '3' },
  { label: '合格', value: '4' },
  { label: '淘汰', value: '5' }
]

export const radioOptions: SelectProps['options'] = [
  { label: '供应商', value: '1' },
  { label: '供应商 + 品类物料', value: '2' }
]
