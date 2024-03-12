import type { TenantSubmitDto } from '@raipiot-2f/api'

import { invalidateTenantQuery, invalidateTenantsQuery } from './invalidates'

export const useTenantRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => tenantsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateTenantsQuery()
    }
  })
}

export const useTenantSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: TenantSubmitDto) => tenantsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateTenantQuery(variables.id)
      }
      invalidateTenantsQuery()
    }
  })
}
