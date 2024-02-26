export const useSystemDictRemoveMutation = () =>
  useMutation({
    mutationFn: (ids: string) => systemParamsAPI.remove(ids)
  })
