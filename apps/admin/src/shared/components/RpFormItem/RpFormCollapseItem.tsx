import type { CollapseProps } from 'antd'
import { merge } from 'lodash-es'
import type { ReactNode } from 'react'

import type { ModalType } from '@/shared/hooks/useModal'

import type { RpBasicFormItemProps } from './types'

// export interface RpFormCollapseItemProps extends CollapseProps {}
export interface RpFormCollapseItemProps<T> extends Omit<CollapseProps, 'items'> {
  items?: {
    children: RpBasicFormItemProps<T>[]
    label: ReactNode
  }[]
  mode?: ModalType
}
export default function RpFormCollapseItem<T>(props: RpFormCollapseItemProps<T>) {
  const { items, ...collapseProps } = props
  // const [activeKey, setActiveKey] = useState<string | string[]>()
  const newItems = useMemo(
    () =>
      props.items?.map((item, index) => ({
        label: item.label,
        children: (
          <RpRow>
            {item.children.map((child, idx) => (
              <RpFormItem
                key={idx}
                {...merge({}, child)}
                mode={props.mode ?? 'edit'}
              />
            ))}
          </RpRow>
        ),
        key: index
      })),
    [props]
  )
  return (
    <ACollapse
      defaultActiveKey={items?.map((_, idx) => idx)}
      {...collapseProps}
      items={newItems}
    />
  )
}
