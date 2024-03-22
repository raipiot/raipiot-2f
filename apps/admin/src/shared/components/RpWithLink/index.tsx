import type { LinkProps } from '@tanstack/react-router'

export interface RpLinkProps {
  link?: LinkProps
}

export default function rpWithLink<T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'link'>>
) {
  return function RpWithLink(props: T & RpLinkProps) {
    const { link, ...restProps } = props
    if (link) {
      return (
        // TODO: 修复类型
        <Link {...(link as any)}>
          <WrappedComponent {...restProps} />
        </Link>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
