import type { SignupDto } from '@raipiot-2f/api'

export const useSignupMutation = () =>
  useMutation({
    mutationFn: (data: SignupDto) => authAPI.signup(data)
  })
