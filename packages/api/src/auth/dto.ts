export interface BaseLoginDto {
  tenant_id: string
}

export interface LoginDto extends BaseLoginDto {
  username: string
  password: string
}

export interface SMSLoginDto extends BaseLoginDto {
  phone: string
  verificationCode: string
}

export interface SignupDto {
  username: string
  companyName: string
  password: string
  confirmPassword: string
  registerCountry: string
  photo: string
  email: string
  verificationCode: string
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
