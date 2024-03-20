import type { SystemDictSubmitDto } from '@raipiot-2f/api'

import { invalidateDetailQuery, invalidateListQuery } from './invalidates'

export const useRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => questionnairesAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
    }
  })
}

export const useSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SystemDictSubmitDto) => questionnairesAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDetailQuery(variables.id)
      }
      invalidateListQuery()
    }
  })
}
