import type { Router } from '@tanstack/react-router'
import type { MessageInstance } from 'antd/es/message/interface'
import type { AxiosRequestConfig } from 'axios'
import type { i18n } from 'i18next'

// 刷新 token 时，等待请求的任务
export interface PendingTask {
  /**
   * 请求配置
   */
  config?: AxiosRequestConfig
  /**
   * 请求成功后的回调
   */
  resolve: (value: unknown) => void
}

// 拦截器初始化配置
export interface InterceptorInitConfig {
  /**
   * Tanstack Router 实例
   */
  router: Router
  /**
   * i18n 实例
   */
  i18n: i18n
  /**
   * antd Message 实例
   */
  message: MessageInstance
  /**
   * 登出后重定向地址
   * @default '/login'
   */
  logoutRedirectUrl?: string
}

// 通用响应数据

export interface R<T = unknown> {
  /**
   * 状态码
   */
  msg: string
  /**
   * 数据
   */
  data: T
  /**
   * 错误信息
   */
  error_description?: string
}

// 刷新 Token 响应数据
export interface Tokens {
  access_token: string
  refresh_token: string
}
