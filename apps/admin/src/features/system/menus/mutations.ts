import type { MenuSubmitDto } from '@raipiot-2f/api'

import { invalidateMenuQuery, invalidateMenusQueries, invalidateMenuTreeQuery } from './invalidates'

export const useMenuRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => menusAPI.remove(ids),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateMenusQueries()
      invalidateMenuTreeQuery()
    }
  })
}

export const useMenuSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: MenuSubmitDto) => menusAPI.submit(data),
    onSuccess: (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      if (variables.id) {
        invalidateMenuQuery(variables.id)
      }
      invalidateMenusQueries()
      invalidateMenuTreeQuery()
    }
  })
}
