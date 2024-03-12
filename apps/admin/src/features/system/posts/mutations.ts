import type { PostSubmitDto } from '@raipiot-2f/api'

import { invalidatePostQuery, invalidatePostsQuery } from './invalidates'

export const usePostRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => postsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidatePostsQuery()
    }
  })
}

export const usePostSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: PostSubmitDto) => postsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidatePostQuery(variables.id)
      }
      invalidatePostsQuery()
    }
  })
}
