import type { LoginDto, LoginVo, SMSLoginDto } from '@raipiot-2f/api'
import type { MutateFunction } from '@tanstack/react-query'

import { saveTokens } from './utils'

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

// 登录
export const useLoginMutation = loginMutation<LoginDto>((data) => authAPI.login(data))

// 短信登录
export const useSMSLoginMutation = loginMutation<SMSLoginDto>((data) => authAPI.SMSLogin(data))

// 登出
export const useLogoutMutation = () => {
  const { message } = AApp.useApp()
  const { t } = useTranslation(['AUTH'])
  return useMutation({
    mutationFn: () => authAPI.logout(),
    onSuccess: async () => {
      AuthUtils.clearAccessToken()
      AuthUtils.clearRefreshToken()
      message.success(t('LOG.OUT.SUCCESS'))
      queryClient.removeQueries(Users.infoQueryOptions())
    }
  })
}
