import { isNil } from 'lodash-es'

import rpWithSkeleton from '../RpWithSkeleton'

interface RpDateStringProps {
  value?: any
}

const RpDateString = rpWithSkeleton((props: RpDateStringProps) => {
  const { value } = props
  let label
  let fullLabel
  if (!isNil(value)) {
    fullLabel = DateUtils.formatTime(value)
    label = DateUtils.isCurrentYear(value)
      ? DateUtils.formatTime(value, 'MM-DD HH:mm:ss')
      : fullLabel
  }
  return (
    <ATooltip
      className="cursor-pointer"
      title={fullLabel}
    >
      <span>{label}</span>
    </ATooltip>
  )
})
export default RpDateString
