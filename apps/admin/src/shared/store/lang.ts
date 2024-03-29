import { getDefaultLocale } from '@raipiot-infra/antd'
import { Lang } from '@raipiot-infra/utils'
import type { Locale } from 'antd/lib/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface State {
  lang: string
  locale: Locale
}

interface Actions {
  /**
   * 设置语言
   * @param lang 选择的语言
   */
  setLang: (lang: string) => void
  setLocale: (locale: Locale) => void
}

const initialState: State = {
  lang: LangUtils.getDefaultLang(Lang['en-US']),
  /**
   * antd 国际化配置
   */
  locale: getDefaultLocale()
}

export const useLangStore = create<State & Actions>()(
  devtools(
    subscribeWithSelector((set) => ({
      ...initialState,
      setLang: (lang: string) => set({ lang }),
      setLocale: (locale: Locale) => set({ locale })
    }))
  )
)

/**
 * 监听语言改变
 * @description 改变全局状态时，自动更新 i18n 实例 和 antd 组件语言
 */
useLangStore.subscribe(
  (state) => state.lang,
  async (lang) => {
    i18n.changeLanguage(lang)
    LangUtils.setLang(lang)
    LangUtils.setHtmlLang(lang)
    // TODO: Use Tanstack Query
    // LocaleUtils.processLocaleResources(lang, await LocaleAPI.getLocaleResources(lang))
    switch (lang) {
      case Lang['zh-CN']: {
        useLangStore.setState({ locale: zhCN })
        break
      }
      case Lang['en-US']: {
        useLangStore.setState({ locale: enUS })
        break
      }
      default: {
        break
      }
    }
  },
  {
    fireImmediately: true
  }
)
