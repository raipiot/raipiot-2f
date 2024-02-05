import type { Tokens } from '@/api/auth.type'

export const handleLoginResult = (tokens: Tokens) => {
  const { access_token: accessToken, refresh_token: refreshToken } = tokens ?? {}
  // 保存 token 和用户信息
  AuthUtils.setAccessToken(accessToken)
  AuthUtils.setRefreshToken(refreshToken)
}
