import { StatusCode } from '@raipiot-infra/enums'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import { createSearchParams } from 'react-router-dom'

import type { Token } from '@/api/auth.type'
import router from '@/router'

import { errorMessageMap } from './error-message.map'
import type { PendingTask, R } from './types'

const t = i18n.getFixedT(null, 'COMMON')

export class HttpRequest {
  /**
   * Axios 实例
   */
  instance: AxiosInstance

  /**
   * 刷新令牌的标识
   * @description `true` 表示正在刷新令牌
   */
  isRefreshing = false

  /**
   * 等待请求队列
   */
  pendingQueue: PendingTask[] = []

  /**
   * 刷新令牌接口地址
   */
  readonly #REFRESH_API_URL = `${GlobalEnvConfig.BASE_INSTALLER_API_URL}/auth/refresh-token`

  // Axios 配置
  readonly #config: AxiosRequestConfig = {
    baseURL: GlobalEnvConfig.BASE_API_PREFIX,
    timeout: 30_000,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
  }

  public constructor() {
    this.instance = axios.create(this.#config)
    this.#initInterceptors()
  }

  #initInterceptors() {
    this.instance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        // 设置 token
        const { url } = req

        // 如果是 Base API 接口请求，添加 token
        if (url?.startsWith(GlobalEnvConfig.BASE_INSTALLER_API_URL)) {
          req.headers.setAuthorization(HttpRequest.#getBasicAuthorization())
          if (AuthUtils.isAuthenticated()) {
            req.headers.setAuthorization(AuthUtils.getAuthorization())
          }
        }

        // 设置语言
        req.headers['Accept-Language'] = LangUtils.getDefaultLang()
        return req
      },
      (err: AxiosError) => Promise.reject(err)
    )

    this.instance.interceptors.response.use(
      (res) => {
        const { data, msg } = res.data ?? {}
        if (msg) {
          AMessage.success(msg)
        }
        return data
      },
      async (err: AxiosError<R>) => {
        const { response, config } = err
        const { data, status } = response ?? {}
        const { msg } = data ?? {}
        // 处理取消的请求
        if (axios.isCancel(err)) {
          throw err
        }
        // 当前接口是否是刷新令牌接口
        const isRefreshTokenAPI = config?.url?.includes(this.#REFRESH_API_URL)
        /**
         * 处理刷新令牌接口的认证失败
         * @description
         * - 刷新标识置为 false
         * - 清除 token
         * - 清空请求队列
         */
        if (isRefreshTokenAPI) {
          this.isRefreshing = false
          this.pendingQueue = []
          throw data
        }
        // 如果正在刷新令牌，将当前失败的请求加入待请求队列
        if (this.isRefreshing) {
          return new Promise((resolve) => {
            this.pendingQueue.push({ config, resolve })
          })
        }
        /**
         * 处理响应状态码
         * @description 根据响应状态码进行相应的处理
         * - 401 未授权，刷新 token 或认证失败并跳转到登录页
         * - 403 禁止访问，提示用户无权限访问
         * - 404 未找到，跳转到 404 页面
         * - 500 服务器错误，跳转到 500 页面
         * - 其他状态码，提示错误信息
         */
        const errorMessage = msg ?? errorMessageMap.get(status as number) ?? t('UNKNOWN.ERROR')
        const currentRefreshToken = AuthUtils.getRefreshToken()
        switch (status) {
          case StatusCode.UNAUTHORIZED: {
            // 存在刷新令牌，认证令牌过期时，需要通过刷新令牌获取新的认证令牌
            if (currentRefreshToken) {
              this.isRefreshing = true
              try {
                const { refresh_token: refreshToken, access_token: accessToken } =
                  await this.#refresh(currentRefreshToken)
                AuthUtils.setAccessToken(accessToken)
                AuthUtils.setRefreshToken(refreshToken)
                this.isRefreshing = false
                if (config) {
                  // 重新发起上次失败的请求
                  const res = await this.request({
                    ...config,
                    headers: { ...config.headers, Authorization: AuthUtils.getAuthorization() }
                  })
                  // 刷新了认证令牌后，将待请求队列的请求重新发起
                  if (this.pendingQueue.length > 0) {
                    this.pendingQueue.forEach((task) => task.resolve(this.request(task.config!)))
                    this.pendingQueue = []
                  }
                  return res
                }
              } catch {
                // 处理刷新令牌认证失败的情况
              }
            }
            // 处理认证失败
            HttpRequest.#handleUnauthorized()
            AMessage.error(errorMessage)
            break
          }
          case StatusCode.FORBIDDEN: {
            AMessage.error(errorMessage)
            router.navigate('/403', { replace: true })
            break
          }
          case StatusCode.INTERNAL_SERVER_ERROR:
          case StatusCode.BAD_GATEWAY:
          case StatusCode.GATEWAY_TIMEOUT: {
            AMessage.error(errorMessage)
            router.navigate('/500', { replace: true })
            break
          }
          default: {
            AMessage.error(errorMessage)
            break
          }
        }
        // 网络错误，跳转到 404 页面
        if (!window.navigator.onLine) {
          router.navigate('/404', { replace: true })
          AMessage.error(t('NETWORK.ERROR'))
        }
        throw data
      }
    )
  }

  /**
   * 刷新令牌
   */
  async #refresh(refreshToken: string) {
    const res = await this.post<R<Token>>(this.#REFRESH_API_URL, undefined, {
      params: { refreshToken }
    })
    return res.data
  }

  static #getBasicAuthorization() {
    return `Basic ${GlobalEnvConfig}`
  }

  /**
   * 处理认证失败
   * @description
   * - 清除 token
   * - 跳转到登录页
   */
  static #handleUnauthorized() {
    AuthUtils.clearAccessToken()
    AuthUtils.clearRefreshToken()
    // 如果非登录页面，需要重定向到登录页，且需要带上 redirect 参数
    const { pathname } = router.state.location
    const search =
      pathname === '/login' ? '' : `?${createSearchParams({ redirect: pathname }).toString()}`
    router.navigate({ pathname: '/login', search }, { replace: true })
  }

  /**
   * 通用请求
   * @param config 请求配置
   */
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  /**
   * GET 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 请求配置
   */
  get<T>(url: string, params?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, { params, ...config })
  }

  /**
   * POST 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   */
  post<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }

  /**
   * PUT 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   */
  put<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config)
  }

  /**
   * DELETE 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 请求配置
   */
  delete<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.delete(url, { params, ...config })
  }

  /**
   * PATCH 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   */
  patch<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.patch(url, data, config)
  }
}
