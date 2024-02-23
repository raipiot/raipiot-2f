import type { DictSubmitDto } from '@/api/system/dict/dict.dto'

export const useSystemDictSubmitMutation = () =>
  useMutation({
    mutationFn: (data: DictSubmitDto) => SystemDictAPI.submit(data)
  })
