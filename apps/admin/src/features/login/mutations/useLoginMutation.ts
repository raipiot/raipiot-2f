import type { LoginDto } from '@/api/auth.type'

export const useLoginMutation = () => {
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: LoginDto) => AuthAPI.login(data),
    onSuccess: () => message.success('登录成功')
  })
}
