import type { TooltipProps } from 'antd'

import rpWithSkeleton from '../RpWithSkeleton'

export interface RpStringProps {
  value?: any
  tooltipProps?: TooltipProps | boolean
}

const RpString = rpWithSkeleton<RpStringProps>((props) => {
  const { value, tooltipProps } = props

  if (!tooltipProps) {
    return <span title={value}>{value}</span>
  }

  if (typeof tooltipProps === 'boolean') {
    return (
      <ATooltip
        title={value}
        placement="bottom"
      >
        <span title={value}>{value}</span>
      </ATooltip>
    )
  }

  return (
    <ATooltip
      title={value}
      {...tooltipProps}
    >
      <span title={value}>{value}</span>
    </ATooltip>
  )
})
export default RpString
