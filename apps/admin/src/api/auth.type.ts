export interface LoginInputModel {
  username: string
  password: string
  [property: string]: unknown
}

export interface SignupInputModel {
  account: string
  avatar?: string
  birthday?: string
  email: string
  emailCode: string
  name?: string
  password: string
  phone?: string
  realName?: string
  sex?: string
  type: string
  country?: string
  timezone?: string
  [property: string]: unknown
}

export interface ChangePasswordInputModel {
  oldPassword: string
  newPassword: string
  [property: string]: unknown
}

export interface ForgotPasswordInputModel {
  email: string
  emailCode: string
  password: string
  [property: string]: unknown
}

export interface Tokens {
  access_token: string
  refresh_token: string
}
