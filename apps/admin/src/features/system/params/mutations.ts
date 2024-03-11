import type { ParamSubmitDto } from '@raipiot-2f/api'

import { invalidateParamQuery, invalidateParamsQueries } from './invalidates'

export const useParamRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => paramsAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateParamsQueries()
    }
  })
}

export const useParamSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: ParamSubmitDto) => paramsAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateParamQuery(variables.id)
      }
      invalidateParamsQueries()
    }
  })
}
