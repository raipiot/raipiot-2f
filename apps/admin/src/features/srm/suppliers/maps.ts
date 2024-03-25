import { LifecycleStage } from '@raipiot-2f/api'

export const lifecycleStageLabelMap = new Map([
  [LifecycleStage.REGISTER, '注册'],
  [LifecycleStage.PREMOTE, '推荐'],
  [LifecycleStage.POTENTIAL, '潜在'],
  [LifecycleStage.VALID, '合格'],
  [LifecycleStage.DISUSE, '淘汰']
])
