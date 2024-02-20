export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: () => SystemDictAPI.remove()
  })
