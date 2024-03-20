import type { PropsWithChildren } from 'react'

import type { PermCode } from '@/shared/store/perm'

interface PermCodeProviderProps extends PropsWithChildren {
  /**
   * 权限代码
   */
  code?: PermCode | PermCode[]
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

export function PermCodeProvider(props: PermCodeProviderProps) {
  const { code, matchAll, fallback, children } = props
  const hasCode = usePermCode(code, { matchAll })
  return hasCode ? children : fallback
}
