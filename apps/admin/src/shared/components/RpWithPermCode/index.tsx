import type { PermCode } from '@/shared/store/perm'

export interface RpWithPermCodeOptions {
  /**
   * 是否满足所有权限
   * @default false
   */
  matchAll?: boolean
  /**
   * 无权限时的回退组件
   */
  fallback?: React.ReactNode
}

/**
 * 权限代码高阶组件
 * @param code 权限代码
 * @param options 选项
 * @example
 * ```tsx
 * const User = () => <div>User</div>
 * const UserWithAuth = rpWithPermCode('user:add')(User)
 * const App = () => <UserWithAuth />
 */
const rpWithPermCode =
  (code?: PermCode | PermCode[], options?: RpWithPermCodeOptions) =>
  <T,>(WrappedComponent: React.ComponentType<T>) =>
    function RpWithPermCode(props: T & JSX.IntrinsicAttributes) {
      const { matchAll, fallback } = options ?? {}
      const hasCode = usePermCode(code, { matchAll })

      return hasCode ? <WrappedComponent {...props} /> : fallback
    }
export default rpWithPermCode
