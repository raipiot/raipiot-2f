import type { LoginDto } from '@raipiot-2f/api'

export const useLoginMutation = () => {
  const { message } = AApp.useApp()
  const tabStore = useTabStore()
  return useMutation({
    mutationFn: (data: LoginDto) => authAPI.login(data),
    onSuccess: () => {
      message.success('登录成功')
      // 清除 Tab 记录
      tabStore.clearRecords()
    }
  })
}
