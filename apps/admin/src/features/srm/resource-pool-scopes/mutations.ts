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
