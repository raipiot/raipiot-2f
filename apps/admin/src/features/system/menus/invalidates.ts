import { MENU_TREE_QK, menuQK, MENUS_QK } from './query-keys'

export const invalidateMenusQuery = () =>
  queryClient.invalidateQueries({
    queryKey: [MENUS_QK],
    refetchType: 'all'
  })

export const invalidateMenuQuery = (id: string) =>
  queryClient.invalidateQueries({
    queryKey: menuQK(id)
  })

export const invalidateMenuTreeQuery = () => {
  queryClient.invalidateQueries({
    queryKey: [MENU_TREE_QK],
    refetchType: 'all'
  })
}
