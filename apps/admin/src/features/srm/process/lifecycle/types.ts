import type { LifecycleSupplierApplyListDto, LifecycleSupplierListDto } from '@raipiot-2f/api'
import type { Dayjs } from 'dayjs'

export interface LifecycleSearchFormModel
  extends Omit<LifecycleSupplierListDto, 'createdStartTime' | 'createdEndTime'> {
  dateRange: [Dayjs, Dayjs]
}

export interface ApplicationFormSearchFormModel
  extends Omit<LifecycleSupplierApplyListDto, 'createdStartTime' | 'createdEndTime'> {
  dateRange?: [Dayjs, Dayjs]
}
