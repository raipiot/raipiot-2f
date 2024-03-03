import { invalidateDictsQueries, invalidateDictValuesQueries } from './invalidates'

export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: (ids: string) => systemDictsAPI.remove(ids),
    onSuccess: () => {
      invalidateDictsQueries()
      invalidateDictValuesQueries()
    }
  })
