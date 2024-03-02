import { TableLayoutRefContext } from '../../../context'

export default function FullScreenButton() {
  const { t } = useTranslation()

  const containerRef = useContext(TableLayoutRefContext)

  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef, {
    pageFullscreen: {
      zIndex: 9999,
      className: 'table-layout-full-screen-container'
    }
  })

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
