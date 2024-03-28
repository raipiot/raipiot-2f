import type { LocalSupplierRecordPageDto } from '@raipiot-2f/api'
import type dayjs from 'dayjs'

export interface LocalSupplierRecordSearchFormModel
  extends Omit<LocalSupplierRecordPageDto, 'size' | 'current'> {
  createdTime?: [dayjs.Dayjs, dayjs.Dayjs]
}
