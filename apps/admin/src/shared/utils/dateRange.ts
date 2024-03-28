import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { merge, omit } from 'lodash-es'

type StartAndEndTimeRecord<T> = T & {
  createdEndTime: string
  createdStartTime: string
}

type DateRangeRecord<T> = T & {
  dateRange?: [Dayjs, Dayjs]
}

interface Options {
  template?: string
  startFormatter?: (date: Dayjs) => string
  endFormatter?: (date: Dayjs) => string
}

export const DateRangeToStartAndEnd = <T>(record: DateRangeRecord<T>, options?: Options) => {
  const defaultOptions: Options = {
    template: 'YYYY-MM-DD HH:mm:ss',
    startFormatter: (date) => date.startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    endFormatter: (date) => date.endOf('day').format('YYYY-MM-DD HH:mm:ss')
  }
  const { template } = merge(defaultOptions, options)
  const [createdStartTime, createdEndTime] = record.dateRange || []
  return {
    ...structuredClone(omit(record, 'dateRange')),
    createdStartTime: createdStartTime?.format(template),
    createdEndTime: createdEndTime?.format(template)
  }
}

export const StartAndEndToDateRange = <T>(record: StartAndEndTimeRecord<T>) => {
  const { createdStartTime, createdEndTime } = record
  return {
    ...structuredClone(omit(record, ['createdStartTime', 'createdEndTime'])),
    dateRange: [dayjs(createdStartTime), dayjs(createdEndTime)]
  }
}
