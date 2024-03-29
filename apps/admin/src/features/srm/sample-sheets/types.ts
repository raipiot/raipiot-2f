import type { SampleSheetsPageDto } from '@raipiot-2f/api'
import type { Dayjs } from 'dayjs'

export enum SampleSheetsQueryDimension {
  orderNo,
  detail
}

export interface SampleSheetsSearchFormProps
  extends Omit<SampleSheetsPageDto, 'createdEndTime' | 'createdStartTime'> {
  // 日期范围
  dateRange?: [Dayjs, Dayjs]
  queryDimension?: SampleSheetsQueryDimension
}

export enum SampleSheetTabKey {
  ALL = 'all',
  SUBMIT = 'submit',
  FEEDBACK = 'feedback',
  SUPPLIER_REJECT = 'supplierReject',
  CONFIRM = 'confirm',
  ROLLBACK = 'rollback',
  CONFIRMED = 'confirmed'
}
