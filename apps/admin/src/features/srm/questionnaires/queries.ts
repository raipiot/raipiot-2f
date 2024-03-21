import type { QuestionnairePageDto } from '@raipiot-2f/api'

import { detailQK, listQK } from './query-keys'

export const listQO = (params: QuestionnairePageDto) =>
  queryOptions({
    queryKey: listQK(params),
    queryFn: ({ signal }) => questionnairesAPI.list(params, signal),
    placeholderData: keepPreviousData
  })
export const detailQO = (id: string) =>
  queryOptions({
    queryKey: detailQK(id),
    queryFn: ({ signal }) => questionnairesAPI.detail(id, signal)
  })
