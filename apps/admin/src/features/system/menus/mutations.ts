import type { MenuSubmitDto } from '@raipiot-2f/api'

import { invalidateMenuQuery, invalidateMenusQuery, invalidateMenuTreeQuery } from './invalidates'

export const useMenuRemoveMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (ids: string) => menusAPI.remove(ids),
    onSuccess: async (_, ids) => {
      message.success(t('OPERATION.SUCCESS'))
      await Promise.all([
        ...[ids.split(',').map((id) => invalidateMenuQuery(id))],
        invalidateMenusQuery(),
        invalidateMenuTreeQuery()
      ])
    }
  })
}

export const useMenuSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: MenuSubmitDto) => menusAPI.submit(data),
    onSuccess: async (_, variables) => {
      message.success(t('OPERATION.SUCCESS'))
      await Promise.all([
        variables.id && invalidateMenuQuery(variables.id),
        invalidateMenusQuery(),
        invalidateMenuTreeQuery()
      ])
    }
  })
}
