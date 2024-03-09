import type { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react'

export interface RpPageHeaderProps extends PropsWithChildren {
  /**
   * 标题
   */
  title?: ReactNode | (() => ReactNode)
  /**
   * 图标
   */
  icon?: ReactNode
  /**
   * 隐藏图标、标题
   * @default false
   */
  hideLeft?: boolean
  /**
   * 操作区域
   */
  operate?: ReactNode
  /**
   * 操作区域外层样式
   */
  operateRootProps?: ComponentPropsWithoutRef<'div'>
  /**
   * 最外层容器属性
   */
  rootProps?: ComponentPropsWithoutRef<'div'>
}

function RpPageHeader(props: RpPageHeaderProps) {
  const staticData = useRouteStaticData()
  const {
    title = staticData.title,
    icon = staticData.icon,
    hideLeft,
    operate,
    operateRootProps,
    rootProps
  } = props
  return (
    <div {...rootProps}>
      <div className="mb-2 flex items-center justify-between space-x-2 sm:mb-4 sm:space-x-4">
        <div className="flex items-center space-x-2">
          {icon && !hideLeft && <div className="text-xl">{icon}</div>}
          {title && !hideLeft && (
            <div className="text-2xl">{typeof title === 'function' ? title() : title}</div>
          )}
        </div>
        {operate && (
          <div
            {...operateRootProps}
            className={clsx('space-x-2', operateRootProps?.className)}
          >
            {operate}
          </div>
        )}
      </div>
    </div>
  )
}
export default RpPageHeader
