import type { PopconfirmProps } from 'antd'

type IgnoreProps = 'title' | 'description' | 'okText' | 'cancelText'

interface RpDeletePopconfirmProps extends Omit<PopconfirmProps, IgnoreProps> {
  /**
   * 确认按钮加载状态
   * @default false
   */
  okBtnLoading?: boolean
}

function RpDeletePopconfirm(props: RpDeletePopconfirmProps) {
  const { okBtnLoading, children, ...popconfirmProps } = props
  const { t } = useTranslation()
  return (
    <APopconfirm
      title={t('DELETE')}
      description={t('OPERATION.CONFIRMATION')}
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
      okButtonProps={{
        loading: okBtnLoading,
        disabled: okBtnLoading
      }}
      cancelButtonProps={{
        disabled: okBtnLoading
      }}
      {...popconfirmProps}
    >
      <div>{children}</div>
    </APopconfirm>
  )
}
export default RpDeletePopconfirm
