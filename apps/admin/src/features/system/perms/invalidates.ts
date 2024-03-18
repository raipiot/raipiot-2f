import { permissionsQK } from './query-keys'

export const invalidatePermissionsQuery = () => {
  queryClient.invalidateQueries({
    queryKey: permissionsQK(),
    refetchType: 'all'
  })
}
