import type { PermissionsSubmitDto } from '@raipiot-2f/api'

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
