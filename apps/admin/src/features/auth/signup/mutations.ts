import type { SignupDto } from '@raipiot-2f/api'

export const useSignupMutation = () =>
  useMutation({
    mutationFn: (data: SignupDto) => authAPI.signup(data)
  })

export const useSMSVerificationMutation = () =>
  useMutation({
    mutationFn: (data: { phone: string }) => authAPI.sendSMSVerification(data)
  })
