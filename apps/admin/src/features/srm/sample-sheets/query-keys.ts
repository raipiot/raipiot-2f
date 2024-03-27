import type { SampleSheetsByOriginPageDto, SampleSheetsPageDto } from '@raipiot-2f/api'

export const SAMPLE_SHEET_QK = 'srm:sample-sheet'
export const SAMPLE_SHEETS_QK = 'srm:sample-sheets'

export const sampleSheetQK = (id: string) => [SAMPLE_SHEET_QK, { id }]
export const sampleSheetsQK = (params: SampleSheetsPageDto) => [SAMPLE_SHEETS_QK, params]

// 寻源
export const SAMPLE_SHEET_ORIGIN_LIST_QK = 'srm:sample-sheet-origin-list'
export const sampleSheetsOriginListQK = (params: SampleSheetsByOriginPageDto) => [
  SAMPLE_SHEET_ORIGIN_LIST_QK,
  params
]
