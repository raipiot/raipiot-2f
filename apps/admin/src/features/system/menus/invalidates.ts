import { MENU_TREE_QK, menuQK, MENUS_QK } from './query-keys'

export const invalidateMenusQueries = () =>
  queryClient.invalidateQueries({
    queryKey: [MENUS_QK]
  })

export const invalidateMenuQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: menuQK(id),
    refetchType: 'all'
  })

export const invalidateMenuTreeQuery = () => {
  queryClient.invalidateQueries({
    queryKey: [MENU_TREE_QK]
  })
}
