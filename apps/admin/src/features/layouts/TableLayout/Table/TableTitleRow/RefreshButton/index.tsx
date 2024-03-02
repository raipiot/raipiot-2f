import { TableLayoutPropsContext } from '../../../context'

export default function RefreshButton() {
  const { t } = useTranslation()
  const tableLayoutProps = useContext(TableLayoutPropsContext)

  return (
    <ATooltip
      title={t('REFRESH')}
      placement="top"
    >
      <AButton
        className="!flex items-center justify-center"
        shape="circle"
        icon={
          tableLayoutProps.refreshLoading ? (
            <SvgSpinners180RingWithBg />
          ) : (
            <MaterialSymbolsRefreshRounded />
          )
        }
        disabled={tableLayoutProps.refreshLoading}
        onClick={() => tableLayoutProps?.onRefresh?.()}
      />
    </ATooltip>
  )
}
