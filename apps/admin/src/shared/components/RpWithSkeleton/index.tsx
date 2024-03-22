import type { SkeletonProps } from 'antd'
import { merge } from 'lodash-es'

export interface RpSkeletonProps {
  skeleton?: SkeletonProps
}

export default function rpWithSkeleton<T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'skeleton'>>
) {
  return function RpWithSkeleton(props: T & RpSkeletonProps) {
    const { skeleton, ...restProps } = props
    if (skeleton) {
      const defaultProps: SkeletonProps = {
        loading: true,
        active: true,
        paragraph: false
      }
      return (
        <ASkeleton {...merge(defaultProps, skeleton)}>
          <WrappedComponent {...restProps} />
        </ASkeleton>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
