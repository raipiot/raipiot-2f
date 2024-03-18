import type { R } from '@raipiot-2f/axios'
import type HttpRequest from '@raipiot-2f/axios'
import { md5 } from 'hash-wasm'

import { BaseAPI } from '../base'
import type { ChangePasswordDto, ForgotPasswordDto, LoginDto, SignupDto, SMSLoginDto } from './dto'
import type { LoginVo } from './vo'

export * from './dto'
export * from './vo'

export class AuthAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-auth/oauth`
  }

  /**
   * 密码登录
   */
  async login(params: LoginDto) {
    return this.httpRequest.post<LoginVo>(
      `${this.#API_PREFIX}/token`,
      {},
      {
        params: {
          ...params,
          password: await md5(params.password),
          grant_type: 'password'
        }
      }
    )
  }

  async SMSLogin(params: SMSLoginDto) {
    return this.httpRequest.post<LoginVo>(
      `${this.#API_PREFIX}/token`,
      {},
      {
        params
      }
    )
  }

  /**
   * 注册
   */
  signup(data: SignupDto) {
    return this.httpRequest.post<LoginVo>(`${this.MOCK_API_PREFIX}/register`, data)
  }

  /**
   * 修改密码
   */
  changePassword(data: ChangePasswordDto) {
    return this.httpRequest.post<R>(`${this.#API_PREFIX}/change-password`, data)
  }

  /**
   * 忘记密码
   */
  forgotPassword(data: ForgotPasswordDto) {
    return this.httpRequest.post<R>(`${this.#API_PREFIX}/forget-password`, data)
  }

  /**
   * 退出登录
   */
  logout() {
    return this.httpRequest.get(`${this.#API_PREFIX}/logout`)
  }

  /**
   * 发送短信验证码
   */
  sendSMSVerification(data: { phone: string }) {
    return this.httpRequest.post<R>(`${this.MOCK_API_PREFIX}/verification-code`, data)
  }
}
