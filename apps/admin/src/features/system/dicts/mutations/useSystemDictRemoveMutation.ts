export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: (ids: string) => SystemDictAPI.remove(ids)
  })
