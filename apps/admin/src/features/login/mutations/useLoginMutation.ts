import type { LoginDto } from '@raipiot-2f/api'

import { saveTokens } from '../utils'

export const useLoginMutation = () => {
  const { message } = AApp.useApp()
  const tabStore = useTabStore()
  return useMutation({
    mutationFn: (data: LoginDto) => authAPI.login(data),
    onSuccess: (data) => {
      saveTokens(data)
      message.success('登录成功')
      // 清除 Tab 记录
      tabStore.clearRecords()
    }
  })
}
