import type { LoginDto } from '@/api/auth.type'

// 登录请求
export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: LoginDto) => AuthAPI.login(data)
  })
