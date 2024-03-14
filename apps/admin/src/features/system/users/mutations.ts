import type { UserPlatformSubmitDto, UserSubmitDto } from '@raipiot-2f/api'

import {
  invalidateUserPlatformQuery,
  invalidateUserQuery,
  invalidateUsersQuery
} from './invalidates'

export const useUserRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => usersAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateUsersQuery()
    }
  })
}

export const useUserSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: UserSubmitDto) => usersAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateUserQuery(variables.id)
        invalidateUserPlatformQuery(variables.id)
      }
      invalidateUsersQuery()
    }
  })
}

export const useUserPlatformSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: UserPlatformSubmitDto) => usersAPI.updatePlatform(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      console.log(variables)
      if (variables.userId) {
        invalidateUserQuery(variables.userId)
        invalidateUserPlatformQuery(variables.userId)
      }
    }
  })
}
