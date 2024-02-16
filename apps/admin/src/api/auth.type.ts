export interface LoginDto {
  username: string
  password: string
  tenantId: string
}

export interface TokensVo {
  access_token: string
  refresh_token: string
}

export interface LoginVo extends TokensVo {
  tenant_id: string
  user_id: string
  dept_id: string
  post_id: string
  role_id: string
  oauth_id: string
  account: string
  user_name: string
  nick_name: string
  real_name: string
  role_name: string
  avatar: string
}

export interface SignupDto {
  username: string
  password: string
  confirmPassword: string
}

export interface ChangePasswordDto {
  oldPassword: string
  newPassword: string
}

export interface ForgotPasswordDto {
  email: string
  emailCode: string
  password: string
}
