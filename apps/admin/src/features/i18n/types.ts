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

// TODO: 考虑移到 infra
export type MaybeI18nString = string | Fn<string>
