import type { SampleSheetsPageDto } from '@raipiot-2f/api'

import { sampleSheetQK, sampleSheetsQK } from './query-keys'

export const queries = {
  listOP: (params: SampleSheetsPageDto) =>
    queryOptions({
      queryKey: sampleSheetsQK(params),
      queryFn: ({ signal }) => sampleSheetsAPI.list(params, signal),
      placeholderData: keepPreviousData
    }),
  detailOP: (id: string) =>
    queryOptions({
      queryKey: sampleSheetQK(id),
      queryFn: ({ signal }) => sampleSheetsAPI.detail(id, signal)
    })
}
