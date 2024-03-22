import type { CommonTimeFormatter, LocalTimeFormatter } from '@raipiot-infra/utils'
import type { TooltipProps } from 'antd'
import { merge } from 'lodash-es'

export interface RpDateProps {
  date?:
    | boolean
    | {
        titleFormat?: CommonTimeFormatter | LocalTimeFormatter
        contentFormat?: CommonTimeFormatter | LocalTimeFormatter
      }
}

export default function rpWithDate<
  T extends { value?: any; tooltip?: TooltipProps | boolean } = any
>(WrappedComponent: React.ComponentType<Omit<T, 'date'>>) {
  return function RpWithDate(props: T & RpDateProps) {
    const { date, ...restProps } = props
    if (date || typeof date === 'boolean') {
      const contentFormat = typeof date === 'boolean' ? 'MM-DD HH:mm' : date.titleFormat
      const titleFormat = typeof date === 'boolean' ? 'YYYY-MM-DD HH:mm:ss' : date.contentFormat
      const newValue = DateUtils.formatTime(props.value, contentFormat)
      const newTooltipProps = merge({}, typeof props.tooltip === 'boolean' ? {} : props.tooltip, {
        title: DateUtils.formatTime(props.value, titleFormat)
      })
      return (
        <WrappedComponent
          {...restProps}
          tooltip={newTooltipProps}
          value={newValue}
        />
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
