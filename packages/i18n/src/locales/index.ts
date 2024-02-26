import AUTH from './auth/zh-CN.json'
import COMMON from './common/zh-CN.json'
import LAYOUT from './layout/zh-CN.json'
import ROUTER from './router/zh-CN.json'
import SYSTEM_DICTS from './system/DICTS/zh-CN.json'
import SYSTEM_PARAMS from './system/PARAMS/zh-CN.json'
import VALIDATION from './validation/zh-CN.json'
/**
 * 用于给 `@types/i18next.d.ts` 提供类型定义
 * @see https://www.i18next.com/overview/typescript
 */
const resources = {
  AUTH,
  COMMON,
  LAYOUT,
  ROUTER,
  VALIDATION,
  'SYSTEM/DICTS': SYSTEM_DICTS,
  'SYSTEM/PARAMS': SYSTEM_PARAMS
}

export default resources

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'COMMON'
    resources: typeof resources
  }
}
