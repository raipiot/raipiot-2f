import type { DeptsSubmitDto } from '@raipiot-2f/api'

import { invalidateListQuery, invalidateTreeQuery } from './invalidates'

export const useRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => deptsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateTreeQuery()
      invalidateListQuery()
    }
  })
}

export const useSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: DeptsSubmitDto) => deptsAPI.submit(data),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateTreeQuery()
      invalidateListQuery()
    }
  })
}
