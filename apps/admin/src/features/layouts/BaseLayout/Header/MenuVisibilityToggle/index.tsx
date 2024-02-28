import type { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  isSidebarDisplay: boolean
}

const Icon = memo<IconProps>((iconProps) => {
  const { isSidebarDisplay, ...props } = iconProps

  return isSidebarDisplay ? <LineMdMenuFoldLeft {...props} /> : <LineMdMenuFoldRight {...props} />
})

export default function MenuVisibilityToggle() {
  const { t } = useTranslation()
  const sidebarStore = useSidebarStore()

  return (
    <ATooltip
      title={sidebarStore.isDisplay ? t('HIDE.SIDEBAR') : t('SHOW.SIDEBAR')}
      placement="bottom"
    >
      <div
        onClick={sidebarStore.toggleDisplay}
        className="cursor-pointer text-lg"
      >
        <Icon isSidebarDisplay={sidebarStore.isDisplay} />
      </div>
    </ATooltip>
  )
}
