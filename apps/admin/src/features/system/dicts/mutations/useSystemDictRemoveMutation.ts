import { systemDictsQK } from '../queries'

export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: (ids: string) => systemDictsAPI.remove(ids),
    onSuccess: () =>
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(systemDictsQK().at(0)),
        refetchType: 'active'
      })
  })
