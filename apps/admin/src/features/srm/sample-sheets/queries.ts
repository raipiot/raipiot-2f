import type { SampleSheetsByOriginPageDto } from '@raipiot-2f/api'

import { sampleSheetsAPI } from '@/shared/api'

import { sampleSheetQK, sampleSheetsOriginListQK, sampleSheetsQK } from './query-keys'
import type { SampleSheetsSearchFormProps } from './types'

export const queries = {
  listOP: (params: SampleSheetsSearchFormProps) =>
    queryOptions({
      queryKey: sampleSheetsQK(params),
      queryFn: ({ signal }) => sampleSheetsAPI.list(DateRangeToStartAndEnd(params), signal),
      placeholderData: keepPreviousData
    }),
  detailOP: (id: string) =>
    queryOptions({
      queryKey: sampleSheetQK(id),
      queryFn: ({ signal }) => sampleSheetsAPI.detail(id, signal)
    }),
  originListOP: (params: SampleSheetsByOriginPageDto) =>
    queryOptions({
      queryKey: sampleSheetsOriginListQK(params),
      queryFn: ({ signal }) => sampleSheetsAPI.listByOrigin(params, signal),
      placeholderData: keepPreviousData
    })
}
