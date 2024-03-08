interface RpFullScreenButtonProps {
  /**
   * 是否全屏
   */
  isFullscreen?: boolean
  /**
   * 切换全屏事件
   */
  toggleFullscreen?: () => void
}

function RpFullScreenButton(props: RpFullScreenButtonProps) {
  const { isFullscreen, toggleFullscreen } = props
  const { t } = useTranslation()
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
        onClick={() => toggleFullscreen?.()}
      />
    </ATooltip>
  )
}
export default RpFullScreenButton
