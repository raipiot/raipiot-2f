import type { i18n } from 'i18next'

export interface RpI18n extends i18n {
  rt: (key: string) => string
}
