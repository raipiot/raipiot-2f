import { md5 } from 'hash-wasm'

import type { R } from '@/axios'
import { httpRequest } from '@/axios'

import type { ChangePasswordDto, ForgotPasswordDto, LoginDto, SignupDto } from './auth.dto'
import type { LoginVo } from './auth.vo'

export class AuthAPI {
  static #API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/raipiot-auth/oauth`

  static #MOCK_API_PREFIX = `${GlobalEnvConfig.MOCK_API_PREFIX}`

  /**
   * 登录
   */
  static async login(data: LoginDto) {
    return httpRequest.post<LoginVo>(
      `${this.#API_PREFIX}/token`,
      {},
      {
        params: { ...data, password: await md5(data.password) }
      }
    )
  }

  /**
   * 注册
   */
  static signup(data: SignupDto) {
    return httpRequest.post<LoginVo>(`${this.#MOCK_API_PREFIX}/register`, data)
  }

  /**
   * 修改密码
   */
  static changePassword(data: ChangePasswordDto) {
    return httpRequest.post<R>(`${this.#API_PREFIX}/change-password`, data)
  }

  /**
   * 忘记密码
   */
  static forgotPassword(data: ForgotPasswordDto) {
    return httpRequest.post<R>(`${this.#API_PREFIX}/forget-password`, data)
  }

  /**
   * 退出登录
   */
  static logout() {
    return httpRequest.get(`${this.#API_PREFIX}/logout`)
  }

  /**
   * 发送短信验证码
   */
  static sendSMSVerification(data: { phone: string }) {
    return httpRequest.post<R>(`${this.#MOCK_API_PREFIX}/verification-code`, data)
  }
}
