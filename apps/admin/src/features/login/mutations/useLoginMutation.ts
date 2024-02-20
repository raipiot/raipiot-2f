import type { LoginDto } from '@/api/auth/auth.dto'

export const useLoginMutation = () => {
  const { message } = AApp.useApp()
  const tabStore = useTabStore()
  return useMutation({
    mutationFn: (data: LoginDto) => AuthAPI.login(data),
    onSuccess: () => {
      message.success('登录成功')
      // 清除 Tab 记录
      tabStore.clearRecords()
    }
  })
}
