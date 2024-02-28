export default function RefreshButton() {
  const { t } = useTranslation()

  const onRefresh = () => {}

  return (
    <ATooltip
      title={t('REFRESH')}
      placement="top"
    >
      <AButton
        className="!flex items-center justify-center"
        shape="circle"
        icon={true ? <SvgSpinners180RingWithBg /> : <MaterialSymbolsRefreshRounded />}
        onClick={onRefresh}
      />
    </ATooltip>
  )
}
