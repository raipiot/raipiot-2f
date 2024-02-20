export const useSystemDictSubmitMutation = () =>
  useMutation({
    mutationFn: () => SystemDictAPI.submit()
  })
