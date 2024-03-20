import AUTH from './auth/zh-CN.json'
import COMMON from './common/zh-CN.json'
import PORTAL from './portal/zh-CN.json'
import ROUTER from './router/zh-CN.json'
import SYSTEM_DEPTS from './system/depts/zh-CN.json'
import SYSTEM_DICTS from './system/dicts/zh-CN.json'
import SYSTEM_MENUS from './system/menus/zh-CN.json'
import SYSTEM_PARAMS from './system/params/zh-CN.json'
import SYSTEM_POSTS from './system/posts/zh-CN.json'
import SYSTEM_TENANTS from './system/tenants/zh-CN.json'
import SYSTEM_USERS from './system/users/zh-CN.json'
import VALIDATION from './validation/zh-CN.json'
import SYSTEM_ROLES from './system/roles/zh-CN.json'
import SYSTEM_PERMS from './system/perms/zh-CN.json'

/**
 * 用于给 `@types/i18next.d.ts` 提供类型定义
 * @see https://www.i18next.com/overview/typescript
 */
const resources = {
  AUTH,
  COMMON,
  ROUTER,
  VALIDATION,
  'SYSTEM/USERS': SYSTEM_USERS,
  'SYSTEM/MENUS': SYSTEM_MENUS,
  'SYSTEM/POSTS': SYSTEM_POSTS,
  'SYSTEM/DICTS': SYSTEM_DICTS,
  'SYSTEM/PARAMS': SYSTEM_PARAMS,
  'SYSTEM/TENANTS': SYSTEM_TENANTS,
  'SYSTEM/DEPTS': SYSTEM_DEPTS,
  'SYSTEM/ROLES': SYSTEM_ROLES,
  'SYSTEM/PERMS': SYSTEM_PERMS,
  PORTAL
}

export default resources

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'COMMON'
    resources: typeof resources
  }
}
