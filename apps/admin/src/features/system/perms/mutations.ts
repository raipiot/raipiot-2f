import type { PermissionsSubmitDto, ScopeSubmitDto, ScopeTypeString } from '@raipiot-2f/api'

import { SCOPE_PERMISSION_QK, SCOPE_PERMISSIONS_QK } from './query-keys'

export const useSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (params: PermissionsSubmitDto) => rolesAPI.grant(params),
    onSuccess: () => {
      queryClient.invalidateQueries()
      message.success(t('OPERATION.SUCCESS'))
    }
  })
}

/**
 * 创建权限
 */
export const useScopeSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: ({ params, type }: { params: ScopeSubmitDto; type: ScopeTypeString }) =>
      scopesAPI.submit(params, type),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SCOPE_PERMISSIONS_QK],
        refetchType: 'all'
      })
      queryClient.invalidateQueries({
        queryKey: [SCOPE_PERMISSION_QK],
        refetchType: 'all'
      })
      message.success(t('OPERATION.SUCCESS'))
    }
  })
}

/**
 * 删除权限
 */
export const useScopeRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: ({ ids, type }: { ids: string; type: ScopeTypeString }) =>
      scopesAPI.remove(ids, type),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SCOPE_PERMISSIONS_QK],
        refetchType: 'all'
      })
      message.success(t('OPERATION.SUCCESS'))
    }
  })
}
