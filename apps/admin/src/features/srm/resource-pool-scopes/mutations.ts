import type { ResourcePoolScopeCreateDto } from '@raipiot-2f/api'

import { invalidateListQuery } from './invalidates'

export const useRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string[]) => resourcePoolScopesAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
    }
  })
}

export const useCreateMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: ResourcePoolScopeCreateDto) => resourcePoolScopesAPI.create(data),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
    }
  })
}
