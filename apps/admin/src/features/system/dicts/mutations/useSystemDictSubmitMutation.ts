import type { DictSubmitDto } from '@raipiot-2f/api'

export const useSystemDictSubmitMutation = () =>
  useMutation({
    mutationFn: (data: DictSubmitDto) => systemDictsAPI.submit(data)
  })
