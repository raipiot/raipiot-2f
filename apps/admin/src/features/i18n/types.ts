import type { Fn } from '@raipiot-infra/utils'

export interface LocaleResource {
  /**
   * 命名空间
   */
  ns: string
  /**
   * 多语言资源
   */
  resources: Record<string, string>
}

export type I18nString = string | Fn<string>
