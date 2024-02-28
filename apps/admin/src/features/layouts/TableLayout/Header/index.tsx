import type { ReactNode } from 'react'

export interface HeaderProps {
  /**
   * 右侧操作区域
   * @description 用于放置新增、导出、下载等操作按钮
   */
  renderOperate?: ReactNode | (() => ReactNode)
  /**
   * 顶部 className
   */
  headerClassName?: string
  /**
   * 顶部右侧操作区域 className
   */
  operateClassName?: string
  /**
   * 隐藏图标、标题
   * @default false
   */
  hideTitle?: boolean
}

const Header = memo<HeaderProps>((props) => {
  const responsive = useResponsive()
  const { title, icon } = useRouteMeta()

  return (
    <div className={props.headerClassName}>
      {(!props.hideTitle || props.renderOperate) && (
        <div
          className={clsx(
            'mb-2 flex',
            responsive.sm ? 'flex items-center justify-between space-x-2' : 'flex-col space-y-2'
          )}
        >
          <div className="flex items-center space-x-2">
            {!props.hideTitle && (
              <>
                <div className="text-xl">{icon && icon}</div>
                <div className="text-2xl">{I18nUtils.getText(title)}</div>
              </>
            )}
          </div>
          <div className={clsx('space-x-2', props.operateClassName)}>
            {typeof props.renderOperate === 'function'
              ? props.renderOperate()
              : props.renderOperate}
          </div>
        </div>
      )}
    </div>
  )
})
export default Header
