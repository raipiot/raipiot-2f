export interface LoginDto {
  username: string
  password: string
  tenantId: string
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
