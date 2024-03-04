import type { PropsWithChildren } from 'react'

export type WrapperProps = PropsWithChildren<{
  title: string | React.ReactNode
  aside?: React.ReactNode
  className?: string
  rootClassName?: string
}>
export function Wrapper({
  title,
  children,
  aside,
  className,
  rootClassName,
  ...props
}: WrapperProps) {
  return (
    <div
      {...props}
      className={clsx(
        'border-translate rounded-sm border-x border-b shadow dark:border-[#333]',
        rootClassName
      )}
    >
      <div className="flex justify-between bg-white p-2 dark:bg-[#37393e]">
        <div className="font-semibold">{title}</div>
        {aside}
      </div>
      <div className={clsx('', className)}>{children}</div>
    </div>
  )
}
