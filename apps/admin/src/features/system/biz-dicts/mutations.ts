import type { SystemDictSubmitDto } from '@raipiot-2f/api'

import {
  invalidateBizDictQuery,
  invalidateBizDictsQueries,
  invalidateBizDictValuesQueries
} from './invalidates'

export const useBizDictRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => bizDictsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateBizDictsQueries()
      invalidateBizDictValuesQueries()
    }
  })
}

export const useBizDictSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SystemDictSubmitDto) => bizDictsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateBizDictQuery(variables.id)
      }
      invalidateBizDictsQueries()
      invalidateBizDictValuesQueries()
    }
  })
}
