import { type i18n } from 'i18next'

import type { LocaleResource } from './types'

/**
 * 动态加载 i18n 资源文件
 * @description 读取 /locales 下的全部 JSON 文件
 * - 转化成 i18n 资源数组，格式如 [语言 key, 命名空间 key, 资源文件内容]
 * - 通过 import.meta.glob 实现
 * @see {@link https://vitejs.dev/guide/features.html#glob-import}
 */
function dynamicLoadTrans() {
  return Object.entries(
    import.meta.glob<Record<string, unknown>>('./locales/**/*.json', {
      import: 'default',
      eager: true
    })
  ).map<[string, string, Record<string, unknown>]>(([path, resource]) => [
    path.match(/([^/]+)\.json$/)![1], // 语言 key
    path.split('/').slice(2, -1).join('/').toUpperCase(), // 命名空间 key
    resource // 资源文件内容
  ])
}

/**
 * 加载多语言资源文件
 * @param i18n i18n 实例
 */
export function loadTrans(i18n: i18n) {
  dynamicLoadTrans().forEach((transItem) => i18n.addResourceBundle(...transItem))
  return i18n
}

// 处理多语言资源，添加到 i18n 实例
export const processLocaleResources = (
  lang: string,
  localeResources: LocaleResource[],
  i18n: i18n
) => {
  localeResources.forEach(({ ns, resources }) =>
    // NOTE: i18n.addResources 不会工作，可能是由于 JSON 键前缀重合导致的
    i18n.addResourceBundle(lang, ns, resources, true, true)
  )
}
