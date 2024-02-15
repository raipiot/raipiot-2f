import type { LoginVo } from '@/api/auth.type'

export const saveTokens = (loginVo: LoginVo) => {
  const { access_token: accessToken, refresh_token: refreshToken } = loginVo ?? {}
  // 保存 token 和用户信息
  AuthUtils.setAccessToken(accessToken)
  AuthUtils.setRefreshToken(refreshToken)
}
