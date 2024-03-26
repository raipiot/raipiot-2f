import type { LifecycleStage } from '@raipiot-2f/api'
import { RelegationStatus } from '@raipiot-2f/api'

import { lifecycleStageLabelMap } from '../maps'

interface LifecycleStageValueProps {
  value?: LifecycleStage
  target?: LifecycleStage
  status?: RelegationStatus
}

export function LifecycleStageValue(props: LifecycleStageValueProps) {
  const { value, target, status } = props
  if (!value) {
    return null
  }

  if (!target || !status) {
    return <RpField value={lifecycleStageLabelMap.get(value)} />
  }

  return (
    <ASpace>
      <RpField value={lifecycleStageLabelMap.get(value)} />
      <MaterialSymbolsLineEndArrowRounded
        color={status === RelegationStatus.UPGRADE ? 'green' : 'red'}
      />
      <RpField value={lifecycleStageLabelMap.get(target)} />
    </ASpace>
  )
}
