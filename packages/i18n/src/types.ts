import type { i18n } from 'i18next'

export interface RpI18n extends i18n {
  rt: (key: string) => string
}

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
