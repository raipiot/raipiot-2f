import type { SkeletonProps } from 'antd'

interface RpSkeletonProps {
  skeleton?: boolean
  skeletonProps?: SkeletonProps
}

export default function rpWithSkeleton<T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'skeleton' | 'skeletonProps'>>
) {
  return function RpWithSkeleton(props: T & RpSkeletonProps) {
    const { skeleton, skeletonProps, ...restProps } = props
    if (skeleton) {
      return (
        <ASkeleton
          loading
          paragraph={{ rows: 1 }}
          {...skeletonProps}
        >
          <WrappedComponent {...restProps} />
        </ASkeleton>
      )
    }
    return <WrappedComponent {...restProps} />
  }
}
