import { Lang } from '@raipiot-infra/enums'
import { LangUtils } from '@raipiot-infra/utils'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { DEFAULT_NS } from './constants'
import type { RpI18n } from './types'

i18n.use(initReactI18next).init({
  lng: LangUtils.getDefaultLang(Lang['zh-CN']), // 默认语言
  fallbackLng: Lang['zh-CN'], // 未匹配到语言时的默认语言
  defaultNS: DEFAULT_NS, // 默认命名空间
  ns: [], // 动态加载命名空间
  resources: {}, // 动态加载资源文件，初始化为空
  interpolation: {
    escapeValue: false
  }
})

export default i18n as RpI18n
