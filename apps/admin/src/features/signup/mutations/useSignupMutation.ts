import type { SignupDto } from '@/api/auth.type'

export const useSignupMutation = () =>
  useMutation({
    mutationFn: (data: SignupDto) => AuthAPI.signup(data)
  })
