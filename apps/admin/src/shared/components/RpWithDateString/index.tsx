import type { CommonTimeFormatter, LocalTimeFormatter } from '@raipiot-infra/utils'
import type { TooltipProps } from 'antd'
import {} from 'dayjs'
import { merge } from 'lodash-es'

export type DateStringProps =
  | boolean
  | {
      titleFormat?: CommonTimeFormatter | LocalTimeFormatter
      contentFormat?: CommonTimeFormatter | LocalTimeFormatter
    }

export interface RpDateStringProps {
  dateString?: DateStringProps
}

export default function rpWithDateString<
  T extends { value?: any; tooltip?: TooltipProps | boolean } = any
>(WrappedComponent: React.ComponentType<Omit<T, 'dateString'>>) {
  return function RpWithTag(props: T & RpDateStringProps) {
    const { dateString, ...restProps } = props
    if (dateString || typeof dateString === 'boolean') {
      const contentFormat = typeof dateString === 'boolean' ? 'MM-DD HH:mm' : dateString.titleFormat
      const titleFormat =
        typeof dateString === 'boolean' ? 'YYYY-MM-DD HH:mm:ss' : dateString.contentFormat

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
