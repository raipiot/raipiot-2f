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
      const defaultSkeletonProps: SkeletonProps = { loading: true, active: true, paragraph: false }
      const prop = merge(defaultSkeletonProps, skeleton)
      return (
        <ASkeleton {...prop}>
          <WrappedComponent {...restProps} />
        </ASkeleton>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
