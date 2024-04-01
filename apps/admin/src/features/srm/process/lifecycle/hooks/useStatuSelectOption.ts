import { LifecycleStage } from '@raipiot-2f/api'

export const useStatuSelectOption = (currentStage?: LifecycleStage) => {
  const options = [
    { label: '注册', value: LifecycleStage.REGISTER },
    { label: '推荐', value: LifecycleStage.PREMOTE },
    { label: '潜在', value: LifecycleStage.POTENTIAL },
    { label: '合格', value: LifecycleStage.VALID },
    { label: '淘汰', value: LifecycleStage.DISUSE }
  ]
  return options.filter((option) => option.value !== currentStage)
}
