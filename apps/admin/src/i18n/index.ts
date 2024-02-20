import { Lang } from '@raipiot-infra/enums'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const DEFAULT_NS = 'COMMON'

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
// 添加远程资源翻译方法
i18n.rt = (key: string = '') => (i18n.exists(key) ? i18n.t(key as any) : key)

export default i18n

// i18n 实例声明后，读取 /locales 下的资源文件
dynamicLoadTrans().forEach((transItem) => i18n.addResourceBundle(...transItem))

/**
 * 动态加载 i18n 资源文件
 * @description 读取 /locales 下的全部 JSON 文件
 * - 转化成 i18n 资源数组，格式如 [语言 key, 命名空间 key, 资源文件内容]
 * - 通过 import.meta.glob 实现
 * @see {@link https://vitejs.dev/guide/features.html#glob-import}
 */
function dynamicLoadTrans() {
  return Object.entries(
    import.meta.glob<Record<string, unknown>>('../locales/**/*.json', {
      import: 'default',
      eager: true
    })
  ).map<[string, string, Record<string, unknown>]>(([path, resource]) => [
    path.match(/([^/]+)\.json$/)![1], // 语言 key
    path.split('/')[2].replaceAll('-', '_').toUpperCase(), // 命名空间 key
    resource // 资源文件内容
  ])
}
