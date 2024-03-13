import type { DeptsSubmitDto } from '@raipiot-2f/api'

import { invalidateDeptsQuery, invalidateDeptTreeQuery } from './invalidates'

export const useDeptsRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => deptsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateDeptTreeQuery()
      invalidateDeptsQuery()
    }
  })
}

export const useDeptsSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: DeptsSubmitDto) => deptsAPI.submit(data),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateDeptTreeQuery()
      invalidateDeptsQuery()
    }
  })
}
