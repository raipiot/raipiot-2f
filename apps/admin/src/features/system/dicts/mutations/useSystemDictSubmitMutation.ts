import type { DictSubmitDto } from '@raipiot-2f/api'

import { invalidateDictsQueries, invalidateDictValuesQueries } from './invalidates'

export const useSystemDictSubmitMutation = () =>
  useMutation({
    mutationFn: (data: DictSubmitDto) => systemDictsAPI.submit(data),
    onSuccess: () => {
      invalidateDictsQueries()
      invalidateDictValuesQueries()
    }
  })
