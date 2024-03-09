export interface RefreshButtonProps {
  /**
   * 刷新加载状态
   */
  refreshLoading?: boolean
  /**
   * 刷新事件
   */
  onRefresh?: () => void
}

export function RefreshButton(props: RefreshButtonProps) {
  const { refreshLoading, onRefresh } = props
  const { t } = useTranslation()
  return (
    <ATooltip
      title={t('REFRESH')}
      placement="top"
    >
      <AButton
        className="!flex items-center justify-center"
        shape="circle"
        icon={refreshLoading ? <SvgSpinners180RingWithBg /> : <MaterialSymbolsRefreshRounded />}
        disabled={refreshLoading}
        onClick={() => onRefresh?.()}
      />
    </ATooltip>
  )
}
export default RefreshButton
