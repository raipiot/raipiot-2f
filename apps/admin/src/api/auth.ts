import { md5 } from 'hash-wasm'

import type { R } from '@/axios'
import { httpRequest } from '@/axios'

import type {
  ChangePasswordDto,
  ForgotPasswordDto,
  LoginDto,
  LoginVo,
  SignupDto
} from './auth.type'

export class AuthAPI {
  static #API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/raipiot-auth/oauth`

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
    return httpRequest.post<LoginVo>(`${this.#API_PREFIX}/register`, data)
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
}
