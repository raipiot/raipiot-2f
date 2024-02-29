import type { LoginVo } from '@raipiot-2f/api'

export const saveTokens = (loginVo: LoginVo) => {
  const { access_token: accessToken, refresh_token: refreshToken } = loginVo ?? {}
  if (!accessToken || !refreshToken) {
    throw new Error('登录成功，但未返回 token 信息')
  }
  // 保存 token 和用户信息
  AuthUtils.setAccessToken(accessToken)
  AuthUtils.setRefreshToken(refreshToken)
}
