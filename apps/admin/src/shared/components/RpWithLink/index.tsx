import type { LinkProps } from '@tanstack/react-router'
import { merge } from 'lodash-es'

export interface RpLinkProps {
  link?: Partial<LinkProps>
}

export default function rpWithLink<T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'link'>>
) {
  return function RpWithLink(props: T & RpLinkProps) {
    const { link, ...restProps } = props
    if (link) {
      const defaultProps: Partial<LinkProps> = {}
      const prop = merge(defaultProps, link) as LinkProps
      return (
        <Link {...prop}>
          <WrappedComponent {...restProps} />
        </Link>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
