import type { SelectProps, TabsProps } from 'antd'

import { Suppliers } from '@/features/srm/suppliers'

import { CreateTabOption } from './enums'

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

export const createTabOptions: TabsProps['items'] = [
  {
    label: '选择调查的供应商',
    key: CreateTabOption.SELECT_SUPPLIER,
    children: createElement(Suppliers.SelectEditableTable)
  },
  { label: '预览调查表内容', key: CreateTabOption.PREVIEW_QUESTIONNAIRE }
]
