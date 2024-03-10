import type { DictSubmitDto } from '@raipiot-2f/api'

import {
  invalidateDictQuery,
  invalidateDictsQueries,
  invalidateDictValuesQueries
} from './invalidates'

export const useSystemDictRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => systemDictsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateDictsQueries()
      invalidateDictValuesQueries()
    }
  })
}

export const useSystemDictSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: DictSubmitDto) => systemDictsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDictQuery(variables.id)
      }
      invalidateDictsQueries()
      invalidateDictValuesQueries()
    }
  })
}
