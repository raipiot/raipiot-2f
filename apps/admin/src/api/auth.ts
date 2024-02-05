import type { R } from '@/axios'
import { httpRequest } from '@/axios'

import type {
  ChangePasswordInputModel,
  ForgotPasswordInputModel,
  LoginInputModel,
  SignupInputModel,
  Tokens
} from './auth.type'

export class AuthAPI {
  static #API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/auth`

  /**
   * 登录
   */
  static async login(data: LoginInputModel) {
    const res = await httpRequest.post<R<Tokens>>(`${this.#API_PREFIX}/login`, data)
    return res.data
  }

  /**
   * 注册
   */
  static async signup(data: SignupInputModel) {
    const res = await httpRequest.post<R>(`${this.#API_PREFIX}/register`, data)
    return res.data
  }

  /**
   * 修改密码
   */
  static async changePassword(data: ChangePasswordInputModel) {
    const res = await httpRequest.post<R>(`${this.#API_PREFIX}/change-password`, data)
    return res.data
  }

  /**
   * 忘记密码
   */
  static async forgotPassword(data: ForgotPasswordInputModel) {
    const res = await httpRequest.post<R>(`${this.#API_PREFIX}/forget-password`, data)
    return res.data
  }
}
