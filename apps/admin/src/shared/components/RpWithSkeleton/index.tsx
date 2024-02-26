import { isNil } from 'lodash-es'

interface SkeletonProps {
  value?: any
  skeleton?: boolean
}

export default function rpWithSkeleton<T extends SkeletonProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return function RpWithSkeleton(props: T) {
    const { skeleton, value } = props
    if (skeleton) {
      return (
        <ASkeleton
          loading={isNil(value)}
          paragraph={{ rows: 1 }}
        >
          <WrappedComponent {...props} />
        </ASkeleton>
      )
    }
    return <WrappedComponent {...props} />
  }
}
