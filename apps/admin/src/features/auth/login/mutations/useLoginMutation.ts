import type { LoginDto, LoginVo, SMSLoginDto } from '@raipiot-2f/api'
import type { MutateFunction } from '@tanstack/react-query'

import { saveTokens } from '../utils'

const loginMutation =
  <T>(mutationFn: MutateFunction<LoginVo, any, T>) =>
  () => {
    const { message } = AApp.useApp()
    const tabStore = useTabStore()
    return useMutation({
      mutationFn,
      onSuccess: (data) => {
        saveTokens(data)
        message.success('登录成功')
        // 清除 Tab 记录
        tabStore.clearRecords()
      }
    })
  }

export const useLoginMutation = loginMutation<LoginDto>((data) => authAPI.login(data))

export const useSMSLoginMutation = loginMutation<SMSLoginDto>((data) => authAPI.SMSLogin(data))
