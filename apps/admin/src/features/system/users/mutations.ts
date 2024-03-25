import type { UserPlatformSubmitDto, UserSubmitDto } from '@raipiot-2f/api'

import {
  invalidateDetailQuery,
  invalidateListQuery,
  invalidatePlatformDetailQuery
} from './invalidates'

export const useRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => usersAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
    }
  })
}

export const useSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: UserSubmitDto) => usersAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateDetailQuery(variables.id)
        invalidatePlatformDetailQuery(variables.id)
      }
      invalidateListQuery()
    }
  })
}

export const usePlatformSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: UserPlatformSubmitDto) => usersAPI.updatePlatform(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.userId) {
        invalidateDetailQuery(variables.userId)
        invalidatePlatformDetailQuery(variables.userId)
      }
    }
  })
}

// 导入和导出用户数据
export const useImportUserMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()

  return useMutation({
    mutationFn: ({ file, isCovered }: { file: File; isCovered: boolean }) =>
      usersAPI.importUser(file, FormatUtils.toDbNum(isCovered)),
    onSuccess: () => message.success(t('OPERATION.SUCCESS'))
  })
}

export const useExportUserMutation = () => {
  const { t } = useTranslation(['COMMON', 'SYSTEM/USERS'])
  const { message } = AApp.useApp()

  return useMutation({
    mutationFn: () => usersAPI.exportUser(),
    onSuccess: (blob: Blob) => {
      const url = window.URL.createObjectURL(blob)
      BrowserUtils.downloadFile(url, `${t('SYSTEM/USERS:TEMPLATE.FILE')}.xlsx`)
      message.success(t('OPERATION.SUCCESS'))
    }
  })
}
