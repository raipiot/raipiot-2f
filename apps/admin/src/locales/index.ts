import COMMON from './common/en-US.json'

/**
 * 用于给 `@types/i18next.d.ts` 提供类型定义
 * @see https://www.i18next.com/overview/typescript
 */
const resources = {
  COMMON
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
