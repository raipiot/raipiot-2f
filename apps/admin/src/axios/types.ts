import type { AxiosRequestConfig } from 'axios'

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
