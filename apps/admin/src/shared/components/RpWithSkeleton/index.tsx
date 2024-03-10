import type { SkeletonProps } from 'antd'

interface RpSkeletonProps {
  skeleton?: boolean
  skeletonProps?: SkeletonProps
}

export default function rpWithSkeleton<T>(WrappedComponent: React.ComponentType<T>) {
  return function RpWithSkeleton(props: T & RpSkeletonProps) {
    const { skeleton } = props
    if (skeleton) {
      return (
        <ASkeleton
          loading
          paragraph={{ rows: 1 }}
        >
          <WrappedComponent {...props} />
        </ASkeleton>
      )
    }
    return <WrappedComponent {...props} />
  }
}
