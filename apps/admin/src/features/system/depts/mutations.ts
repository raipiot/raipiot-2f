import type { DeptsSubmitDto } from '@raipiot-2f/api'

import { invalidateDeptsQueries } from './invalidates'
import { deptsTreeQK } from './query-keys'

export const useDeptsRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => deptsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateDeptsQueries()
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
      queryClient.invalidateQueries({
        queryKey: deptsTreeQK()
      })
      invalidateDeptsQueries()
    }
  })
}
