import AUTH from './auth/zh-CN.json'
import COMMON from './common/zh-CN.json'
import LAYOUT from './layout/zh-CN.json'
import ROUTER from './router/zh-CN.json'
import SYSTEM from './system/zh-CN.json'
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
  SYSTEM
}

export default resources

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'COMMON'
    resources: typeof resources
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface i18n {
    rt: (key: string) => string
  }
}
