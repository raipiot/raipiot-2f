import type { SampleSheetsPageDto } from '@raipiot-2f/api'

export const SAMPLE_SHEET_QK = 'srm:sample-sheet'
export const SAMPLE_SHEETS_QK = 'srm:sample-sheets'

export const sampleSheetQK = (id: string) => [SAMPLE_SHEET_QK, { id }]
export const sampleSheetsQK = (params: SampleSheetsPageDto) => [SAMPLE_SHEETS_QK, params]
