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

// 后端定义的查询参数
export enum SampleSheetTabKey {
  ALL = '0',
  NEW = '1',
  FEEDBACK = '2', // 待反馈 、 已经确认
  REJECTED = '3', // 已退回
  CONFIRM = '4', // 待确认
  CONFIRMED = '5', // 已确认
  CLOSED = '70' // 已关闭
}
