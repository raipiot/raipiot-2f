import type { ComponentPropsWithRef, PropsWithChildren, ReactNode } from 'react'

import type { RpPageHeaderProps } from '../RpPageHeader'

export interface RpPageContainerProps extends PropsWithChildren {
  /**
   * PageHeader 属性
   */
  pageHeaderProps?: RpPageHeaderProps
  /**
   * 头部区域
   */
  renderHeader?: ReactNode
  /**
   * 最外层容器属性
   */
  rootProps?: ComponentPropsWithRef<'div'>
}

function RpPageContainer(props: RpPageContainerProps) {
  const { pageHeaderProps, renderHeader, rootProps, children } = props ?? {}
  return (
    <div
      {...rootProps}
      className={clsx('min-h-[calc(100vh-168px)]', rootProps?.className)}
    >
      {renderHeader ?? <RpPageHeader {...pageHeaderProps} />}
      <div className="space-y-2 overflow-x-hidden sm:space-y-4">{children}</div>
    </div>
  )
}
export default RpPageContainer
