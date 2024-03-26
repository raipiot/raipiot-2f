import type {
  SupplierEntryCheckSocialCodeDto,
  SupplierEntryCooperateInfoSubmitDto,
  SupplierEntryCreateDto,
  SupplierEntryMainInfoSubmitDto,
  SupplierEntrySecondaryInfoSubmitDto
} from '@raipiot-2f/api'

import { invalidateDetailQuery } from '../suppliers/invalidates'
import { invalidateListQuery } from './invalidates'

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

export const useSaveMainInfoMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierEntryMainInfoSubmitDto) => suppliersAPI.saveEntryMainInfo(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDetailQuery(variables.id)
      }
    }
  })
}

export const useSaveSecondaryInfoMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierEntrySecondaryInfoSubmitDto) =>
      suppliersAPI.saveEntrySecondaryInfo(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDetailQuery(variables.id)
      }
    }
  })
}

export const useSaveCooperateInfoMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierEntryCooperateInfoSubmitDto) =>
      suppliersAPI.saveEntryCooperateInfo(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDetailQuery(variables.id)
      }
    }
  })
}

export const useCheckSocialCodeMutation = () => {
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: SupplierEntryCheckSocialCodeDto) =>
      suppliersAPI.unifiedSocialCodeExist(data),
    onError: () => {
      message.error('统一社会信用代码已存在')
    }
  })
}
