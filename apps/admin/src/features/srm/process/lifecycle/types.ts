import type { LifecycleSupplierListDto } from '@raipiot-2f/api'
import type { Dayjs } from 'dayjs'

export interface LifecycleSearchFormModel
  extends Omit<LifecycleSupplierListDto, 'createdStartTime' | 'createdEndTime'> {
  dateRange: [Dayjs, Dayjs]
}
