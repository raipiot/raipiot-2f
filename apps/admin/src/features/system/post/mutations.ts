import type { PostSubmitDto } from '@raipiot-2f/api'

import {
  invalidatePostQuery,
  invalidatePostsQueries,
  invalidatePostValuesQueries
} from './invalidates'

export const usePostRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => systemPostsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidatePostsQueries()
      invalidatePostValuesQueries()
    }
  })
}

export const usePostSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: PostSubmitDto) => systemPostsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidatePostQuery(variables.id)
      }
      invalidatePostsQueries()
      invalidatePostValuesQueries()
    }
  })
}
