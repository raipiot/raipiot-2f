import type { LoginDto, LoginVo, SMSLoginDto } from '@raipiot-2f/api'
import type { MutateFunction } from '@tanstack/react-query'

import { saveTokens } from '../utils'

const mutationWrapper =
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

export const useLoginMutation = mutationWrapper<LoginDto>((data: LoginDto) => authAPI.login(data))

export const useSMSLoginMutation = mutationWrapper<SMSLoginDto>((data: SMSLoginDto) =>
  authAPI.SMSLogin(data)
)
