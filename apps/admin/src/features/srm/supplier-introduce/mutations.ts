import type {
  SupplierEntryCreateDto,
  SupplierIntroUpdateDto,
  SupplierIntroUpdateStatusDto
} from '@raipiot-2f/api'

import { invalidateDetailQuery, invalidateListQuery } from './invalidates'

export const useCreateMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierEntryCreateDto) => suppliersAPI.createEntry(data),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
    }
  })
}

export const useEditMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierIntroUpdateDto) => suppliersAPI.editIntroduce(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
      if (variables.id) {
        invalidateDetailQuery(variables.id)
      }
    }
  })
}

export const useUpdateStatusMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierIntroUpdateStatusDto) => suppliersAPI.updateEntryStatus(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
      if (variables.id) {
        invalidateDetailQuery(variables.id)
      }
    }
  })
}
