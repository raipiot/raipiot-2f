import './index.module.scss'

import type { MouseEvent, SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  isLightTheme: boolean
}

const Icon = memo<IconProps>((iconProps) => {
  const { isLightTheme, ...props } = iconProps
  return isLightTheme ? (
    <LineMdMoonAltToSunnyOutlineLoopTransition {...props} />
  ) : (
    <LineMdSunnyFilledLoopToMoonAltFilledLoopTransition {...props} />
  )
})

const isAppearanceTransition = () =>
  document.startViewTransition !== undefined &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ThemeToggle() {
  const { t } = useTranslation('LAYOUT')
  const themeStore = useThemeStore()

  const handleToggleTheme = async (event: MouseEvent) => {
    if (!isAppearanceTransition()) {
      themeStore.toggleTheme()
      return
    }
    const { clientX: x, clientY: y } = event
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    const transition = document.startViewTransition(() => themeStore.toggleTheme())
    await transition.ready
    const isDarkTheme = themeStore.isDarkTheme()
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDarkTheme ? clipPath : [...clipPath].reverse()
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: isDarkTheme ? '::view-transition-new(root)' : '::view-transition-old(root)'
      }
    )
  }

  return (
    <ATooltip
      title={t('HEADER.SWITCH.THEME')}
      placement="bottom"
    >
      <Icon
        isLightTheme={themeStore.isLightTheme()}
        className="cursor-pointer"
        color={themeStore.isLightTheme() ? '#FDC022' : '#FED736'}
        onClick={handleToggleTheme}
      />
    </ATooltip>
  )
}