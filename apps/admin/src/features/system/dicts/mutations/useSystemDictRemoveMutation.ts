export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: (ids: string) => systemDictsAPI.remove(ids)
  })
