import type { SystemDictSubmitDto } from '@raipiot-2f/api'

import {
  invalidateSystemDictQuery,
  invalidateSystemDictsQueries,
  invalidateSystemDictValuesQueries
} from './invalidates'

export const useSystemDictRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => systemDictsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateSystemDictsQueries()
      invalidateSystemDictValuesQueries()
    }
  })
}

export const useSystemDictSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SystemDictSubmitDto) => systemDictsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateSystemDictQuery(variables.id)
      }
      invalidateSystemDictsQueries()
      invalidateSystemDictValuesQueries()
    }
  })
}
