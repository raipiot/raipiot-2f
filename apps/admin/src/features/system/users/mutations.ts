import type { UserPlatformSubmitDto, UserSubmitDto } from '@raipiot-2f/api'

import {
  invalidateDetailQuery,
  invalidateListQuery,
  invalidatePlatformDetailQuery
} from './invalidates'

export const useRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => usersAPI.remove(ids),
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
    mutationFn: (data: UserSubmitDto) => usersAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDetailQuery(variables.id)
        invalidatePlatformDetailQuery(variables.id)
      }
      invalidateListQuery()
    }
  })
}

export const usePlatformSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: UserPlatformSubmitDto) => usersAPI.updatePlatform(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.userId) {
        invalidateDetailQuery(variables.userId)
        invalidatePlatformDetailQuery(variables.userId)
      }
    }
  })
}
