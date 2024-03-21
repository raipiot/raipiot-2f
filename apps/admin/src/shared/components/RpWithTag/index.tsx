import type { TagProps } from 'antd'
import { merge } from 'lodash-es'

export interface RpTagProps {
  tag?: TagProps | boolean
}

export default function rpWithTag<T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'tag'>>
) {
  return function RpWithTag(props: T & RpTagProps) {
    const { tag, ...restProps } = props
    if (tag) {
      const defaultProps: TagProps = {}
      const scopeProps = merge(defaultProps, typeof tag === 'boolean' ? {} : tag)
      return (
        <ATag {...scopeProps}>
          <WrappedComponent {...restProps} />
        </ATag>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
