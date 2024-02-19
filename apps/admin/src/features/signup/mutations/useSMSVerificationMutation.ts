export const useSMSVerificationMutation = () =>
  useMutation({
    mutationFn: (data: { phone: string }) => AuthAPI.sendSMSVerification(data)
  })
