import type { MaybeI18nString } from '@raipiot-infra/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ModuleMenuItemProps extends ComponentPropsWithoutRef<'div'> {
  label?: MaybeI18nString
  icon?: ReactNode
  active?: boolean
}

export default function ModuleMenuItem(props: ModuleMenuItemProps) {
  const { label, icon, className, active, ...divProps } = props
  const { i18n } = useTranslation()
  return (
    <ATooltip
      placement="top"
      title={label}
    >
      <div
        className={clsx(
          'flex size-12 cursor-pointer flex-col items-center justify-center space-y-1 rounded-md opacity-100 transition-all ease-in-out hover:bg-gray-200 active:opacity-90 dark:hover:bg-gray-500',
          active && 'bg-gray-200 dark:bg-gray-500 dark:text-white',
          className
        )}
        {...divProps}
      >
        {icon}
        <span
          className="text-[10px]"
          key={i18n.language}
        >
          {I18nUtils.getText(label)}
        </span>
      </div>
    </ATooltip>
  )
}
