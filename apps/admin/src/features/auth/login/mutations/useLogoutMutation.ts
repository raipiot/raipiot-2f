export const useLogoutMutation = () => {
  const { message } = AApp.useApp()
  const { t } = useTranslation(['AUTH'])
  return useMutation({
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      AuthUtils.clearAccessToken()
      AuthUtils.clearRefreshToken()
      message.success(t('LOG.OUT.SUCCESS'))
    }
  })
}
