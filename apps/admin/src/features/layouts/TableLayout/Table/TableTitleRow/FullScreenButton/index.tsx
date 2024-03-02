import { TableLayoutFullScreenContext } from '../../../context'

export default function FullScreenButton() {
  const { t } = useTranslation()

  const { isFullscreen, toggleFullscreen } = useContext(TableLayoutFullScreenContext)

  return (
    <ATooltip
      title={isFullscreen ? t('EXIT.FULL.SCREEN') : t('FULL.SCREEN')}
      placement="top"
    >
      <AButton
        className="!flex items-center justify-center"
        shape="circle"
        icon={
          isFullscreen ? (
            <MaterialSymbolsCollapseContentRounded />
          ) : (
            <MaterialSymbolsExpandContentRounded />
          )
        }
        onClick={() => toggleFullscreen()}
      />
    </ATooltip>
  )
}
