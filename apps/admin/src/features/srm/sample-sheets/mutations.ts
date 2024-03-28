import type { SampleSheetByHandmadeDto } from '@raipiot-2f/api'

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

/**
 * 用逗号分隔 id ，发布送样单
 * @returns
 */
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

export const useSaveNewSheetMutation = () => {
  const { operateSuccess } = useMessage()
  return useMutation({
    mutationFn: (data: SampleSheetByHandmadeDto) => sampleSheetsAPI.saveSheetByHandmade(data),
    onSuccess: () => {
      operateSuccess()
      // 明确指定刷新列表
      invalidates.list()
    }
  })
}

export const useDeleteSheetMutation = () => {
  const { operateSuccess } = useMessage()
  return useMutation({
    mutationFn: (id: string) => sampleSheetsAPI.deleteSheet(id),
    onSuccess: () => {
      operateSuccess()
      // 明确指定刷新列表
      invalidates.list()
    }
  })
}
