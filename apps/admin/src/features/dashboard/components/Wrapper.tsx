import type { PropsWithChildren } from 'react'

export interface WrapperProps {
  title: string | React.ReactNode
  aside?: React.ReactNode
  className?: string
  rootClassName?: string
}

export function Wrapper({
  title,
  children,
  aside,
  className,
  rootClassName,
  ...props
}: PropsWithChildren<WrapperProps>) {
  return (
    <div
      {...props}
      className={clsx(
        'border-translate rounded-sm border-x border-b shadow dark:border-dark',
        rootClassName
      )}
    >
      <div className="flex justify-between bg-white p-2 dark:bg-dark">
        <div className="font-semibold">{title}</div>
        {aside}
      </div>
      <div className={className}>{children}</div>
    </div>
  )
}
