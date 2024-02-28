import type { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  isFullscreen: boolean
}

const Icon = memo<IconProps>((iconProps) => {
  const { isFullscreen, ...props } = iconProps
  return isFullscreen ? (
    <MaterialSymbolsFullscreenExitRounded {...props} />
  ) : (
    <MaterialSymbolsFullscreenRounded {...props} />
  )
})

export default function FullScreenButton() {
  const { t } = useTranslation()
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body)

  return (
    <ATooltip
      title={isFullscreen ? t('EXIT.FULL.SCREEN') : t('FULL.SCREEN')}
      placement="bottom"
    >
      <div
        className="cursor-pointer text-lg"
        onClick={toggleFullscreen}
      >
        <Icon isFullscreen={isFullscreen} />
      </div>
    </ATooltip>
  )
}
