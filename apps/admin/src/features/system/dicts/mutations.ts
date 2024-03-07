import type { DictSubmitDto } from '@raipiot-2f/api'

import {
  invalidateDictQuery,
  invalidateDictsQueries,
  invalidateDictValuesQueries
} from './invalidates'

export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: (ids: string) => systemDictsAPI.remove(ids),
    onSuccess: () => {
      invalidateDictsQueries()
      invalidateDictValuesQueries()
    }
  })

export const useSystemDictSubmitMutation = () =>
  useMutation({
    mutationFn: (data: DictSubmitDto) => systemDictsAPI.submit(data),
    onSuccess: (_, variables) => {
      if (variables.id) {
        invalidateDictQuery(variables.id)
      }
      invalidateDictsQueries()
      invalidateDictValuesQueries()
    }
  })