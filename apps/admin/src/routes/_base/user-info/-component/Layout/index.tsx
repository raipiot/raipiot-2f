import type { LayoutProps } from './Layout.types'

function Layout({ className = '', ...props }: LayoutProps) {
  return (
    <div
      {...props}
      className={`${className}`}
    >
      Layout
      {/* Maybe */}
      {props?.children}
    </div>
  )
}

Layout.displayName = 'Layout'

export default Layout
