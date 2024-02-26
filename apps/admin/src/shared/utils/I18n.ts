import type { MaybeI18nString } from '@/features/i18n'

export class I18nUtils {
  static getText(text?: MaybeI18nString) {
    if (!text) {
      return ''
    }
    return typeof text === 'function' ? text() : text
  }
}
