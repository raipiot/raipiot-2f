import type { SignupDto } from '@/api/auth/auth.dto'

export const useSignupMutation = () =>
  useMutation({
    mutationFn: (data: SignupDto) => AuthAPI.signup(data)
  })
