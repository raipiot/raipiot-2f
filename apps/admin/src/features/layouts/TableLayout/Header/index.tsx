import type { ReactNode } from 'react'

interface Props {
  /**
   * 右侧操作区域
   */
  renderRight?: ReactNode
}

const Header = memo<Props>((props) => {
  const hideTitle = false // TODO: 用于隐藏标题

  const responsive = useResponsive()
  const { title, icon } = useMatches().at(-1)?.staticData ?? {}

  return (
    <div>
      {(!hideTitle || props.renderRight) && (
        <div
          className={clsx(
            'mb-2 flex',
            responsive.sm ? 'flex items-center justify-between space-x-2' : 'flex-col space-y-2'
          )}
        >
          <div className="flex items-center space-x-2">
            <div className="text-xl">{icon && icon}</div>
            <div className={clsx('text-2xl', hideTitle && 'hidden')}>
              {I18nUtils.getText(title)}
            </div>
          </div>
          <div className="space-x-2">{props.renderRight && props.renderRight}</div>
        </div>
      )}
    </div>
  )
})
export default Header
