import type { SupplierIntroPageDto } from '@raipiot-2f/api'
import type dayjs from 'dayjs'

export interface SupplierIntroSearchFormModel
  extends Omit<SupplierIntroPageDto, 'current' | 'size'> {
  createdTime?: [dayjs.Dayjs, dayjs.Dayjs]
}
