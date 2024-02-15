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
    const res = await httpRequest.post<R<LoginVo>>(
      `${this.#API_PREFIX}/token`,
      {},
      {
        params: data
      }
    )
    return res.data
  }

  /**
   * 注册
   */
  static async signup(data: SignupDto) {
    const res = await httpRequest.post<R>(`${this.#API_PREFIX}/register`, data)
    return res.data
  }

  /**
   * 修改密码
   */
  static async changePassword(data: ChangePasswordDto) {
    const res = await httpRequest.post<R>(`${this.#API_PREFIX}/change-password`, data)
    return res.data
  }

  /**
   * 忘记密码
   */
  static async forgotPassword(data: ForgotPasswordDto) {
    const res = await httpRequest.post<R>(`${this.#API_PREFIX}/forget-password`, data)
    return res.data
  }
}
