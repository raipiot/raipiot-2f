import i18n from './instance'
import { loadTrans } from './utils'

// 添加远程资源翻译方法
i18n.rt = (key: string = '') => (i18n.exists(key) ? i18n.t(key as any) : key)

export { i18n, loadTrans }
