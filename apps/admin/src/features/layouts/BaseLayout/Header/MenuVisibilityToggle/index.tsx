import type { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  isSidebarDisplay: boolean
}

const Icon = memo<IconProps>((iconProps) => {
  const { isSidebarDisplay, ...props } = iconProps

  return isSidebarDisplay ? <LineMdMenuFoldLeft {...props} /> : <LineMdMenuFoldRight {...props} />
})

export default function MenuVisibilityToggle() {
  const { t } = useTranslation('LAYOUT')
  const sidebarStore = useSidebarStore()

  return (
    <ATooltip
      title={t('SIDEBAR.HIDE')}
      placement="bottom"
    >
      <Icon
        isSidebarDisplay={sidebarStore.isDisplay}
        className="cursor-pointer text-xl"
        onClick={sidebarStore.toggleDisplay}
      />
    </ATooltip>
  )
}
