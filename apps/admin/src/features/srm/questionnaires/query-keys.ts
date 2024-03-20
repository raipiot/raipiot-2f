import type { QuestionnairePageDto } from '@raipiot-2f/api'

export const LIST_QK = 'system:dicts'

export const DETAIL_QK = 'system:dict'

export const listQK = (params?: QuestionnairePageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]
