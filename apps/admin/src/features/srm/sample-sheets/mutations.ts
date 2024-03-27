import { sampleSheetsAPI } from '@/shared/api'

import { invalidates } from './invalidates'

export const useRemoveMutation = () => {
  const { operateSuccess } = useMessage()
  return useMutation({
    mutationFn: (ids: string) => sampleSheetsAPI.remove(ids),
    onSuccess: () => {
      operateSuccess()
      // 明确指定刷新列表
      invalidates.list()
    }
  })
}

export const usePublishMutation = () => {
  const { operateSuccess } = useMessage()
  return useMutation({
    mutationFn: (ids: string) => sampleSheetsAPI.publish(ids),
    onSuccess: () => {
      operateSuccess()
      // 明确指定刷新列表
      invalidates.list()
    }
  })
}
