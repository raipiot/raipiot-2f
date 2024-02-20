import { useFullscreen } from '@raipiot-srm/hooks'
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
  const { t } = useTranslation('LAYOUT')
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body)

  return (
    <ATooltip
      title={t('HEADER.FULL.SCREEN')}
      placement="bottom"
    >
      <Icon
        isFullscreen={isFullscreen}
        className="cursor-pointer"
        onClick={toggleFullscreen}
      />
    </ATooltip>
  )
}
