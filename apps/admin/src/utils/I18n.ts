import type { Fn } from '@raipiot-infra/utils'

export class I18nUtils {
  static getText(text?: string | Fn<string>) {
    if (!text) {
      return ''
    }
    return typeof text === 'function' ? text() : text
  }
}
