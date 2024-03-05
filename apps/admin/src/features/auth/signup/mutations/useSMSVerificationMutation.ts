export const useSMSVerificationMutation = () =>
  useMutation({
    mutationFn: (data: { phone: string }) => authAPI.sendSMSVerification(data)
  })
