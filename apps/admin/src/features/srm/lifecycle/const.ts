import { LifecycleStage, LifecycleSupplierApplyListDtoStatus } from '@raipiot-2f/api'

export const lifecycleOptions = [
  { label: '注册', value: LifecycleStage.REGISTER },
  { label: '推荐', value: LifecycleStage.PREMOTE },
  { label: '潜在', value: LifecycleStage.POTENTIAL },
  { label: '合格', value: LifecycleStage.VALID },
  { label: '淘汰', value: LifecycleStage.DISUSE }
]

export const lifecycleApplicationFormOptions = [
  {
    label: '新建',
    value: LifecycleSupplierApplyListDtoStatus.NEW
  },
  {
    label: '待审批',
    value: LifecycleSupplierApplyListDtoStatus.PENDING
  },
  {
    label: '审批通过',
    value: LifecycleSupplierApplyListDtoStatus.APPROVED
  },
  {
    label: '审批驳回',
    value: LifecycleSupplierApplyListDtoStatus.REJECTED
  }
]
