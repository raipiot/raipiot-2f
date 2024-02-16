import type { LoginDto } from '@/api/auth.type'

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: LoginDto) => AuthAPI.login(data)
  })
