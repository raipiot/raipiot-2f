import AUTH from './auth/zh-CN.json'
import COMMON from './common/zh-CN.json'
import PORTAL from './portal/zh-CN.json'
import ROUTER from './router/zh-CN.json'
import SYSTEM_DICTS from './system/dicts/zh-CN.json'
import SYSTEM_MENUS from './system/menus/zh-CN.json'
import SYSTEM_PARAMS from './system/params/zh-CN.json'
import SYSTEM_POSTS from './system/posts/zh-CN.json'
import SYSTEM_TENANTS from './system/tenants/zh-CN.json'
import VALIDATION from './validation/zh-CN.json'

/**
 * 用于给 `@types/i18next.d.ts` 提供类型定义
 * @see https://www.i18next.com/overview/typescript
 */
const resources = {
  AUTH,
  COMMON,
  ROUTER,
  VALIDATION,
  'SYSTEM/MENUS': SYSTEM_MENUS,
  'SYSTEM/POSTS': SYSTEM_POSTS,
  'SYSTEM/DICTS': SYSTEM_DICTS,
  'SYSTEM/PARAMS': SYSTEM_PARAMS,
  'SYSTEM/TENANTS': SYSTEM_TENANTS,
  PORTAL
}

export default resources

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'COMMON'
    resources: typeof resources
  }
}
