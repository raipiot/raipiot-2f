import type { TooltipProps } from 'antd'
import { merge } from 'lodash-es'

export interface RpTooltipProps {
  tooltip?: TooltipProps | boolean
}

export default function rpWithTooltip<T extends { value?: any } = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'tooltip'>>
) {
  return function RpWithTag(props: T & RpTooltipProps) {
    const { tooltip, ...restProps } = props
    if (tooltip !== undefined) {
      const defaultProps: TooltipProps = {
        placement: 'top',
        title: restProps.value
      }
      const scopeProps = merge(defaultProps, typeof tooltip === 'boolean' ? {} : tooltip)
      return (
        <ATooltip {...scopeProps}>
          <span>
            <WrappedComponent {...restProps} />
          </span>
        </ATooltip>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
