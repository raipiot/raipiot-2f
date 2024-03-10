import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ModuleMenuItemProps extends ComponentPropsWithoutRef<'div'> {
  label?: string
  icon?: ReactNode
  active?: boolean
}

export default function ModuleMenuItem(props: ModuleMenuItemProps) {
  const { label, icon, className, active, ...divProps } = props
  return (
    <ATooltip
      placement="right"
      title={label}
    >
      <div
        className={clsx(
          'flex size-12 cursor-pointer items-center justify-center opacity-100 transition-all ease-in-out hover:bg-gray-200 active:opacity-90 dark:hover:bg-gray-500',
          active ? 'rounded-full bg-gray-200 dark:bg-gray-500 dark:text-white' : 'rounded-md',
          className
        )}
        {...divProps}
      >
        {icon}
      </div>
    </ATooltip>
  )
}
