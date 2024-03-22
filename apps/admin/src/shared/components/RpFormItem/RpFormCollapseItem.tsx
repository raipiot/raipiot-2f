import type { CollapseProps } from 'antd'
import type { ReactNode } from 'react'

import type { RpBasicFormItemProps } from './types'

// export interface RpFormCollapseItemProps extends CollapseProps {}
export interface RpFormCollapseItemProps<T> extends Omit<CollapseProps, 'items'> {
  items?: {
    children: RpBasicFormItemProps<T>[]
    label: ReactNode
  }[]
}
export default function RpFormCollapseItem<T>(props: RpFormCollapseItemProps<T>) {
  const { items, ...collapseProps } = props
  // const [activeKey, setActiveKey] = useState<string | string[]>()
  const newItems = items?.map((item, index) => ({
    label: item.label,
    children: (
      <RpRow>
        {item.children.map((child, idx) => (
          <RpFormItem
            key={idx}
            {...child}
          />
        ))}
      </RpRow>
    ),
    key: index
  }))
  return (
    <ACollapse
      defaultActiveKey={items?.map((_, idx) => idx)}
      {...collapseProps}
      items={newItems}
    />
  )
}
