import type { ModalProps } from 'antd'

export interface RpModalProps extends ModalProps {}

const RpModal = memo<RpModalProps>((props) => {
  const modalWidth = useResponsiveModalWidth()
  const { width = modalWidth, confirmLoading, children, ...modalProps } = props
  const { t } = useTranslation()

  return (
    <AModal
      width={width}
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
      forceRender // 防止模态框内的表单因为未渲染而没有绑定表单实例
      destroyOnClose
      okButtonProps={{
        loading: confirmLoading,
        disabled: confirmLoading
      }}
      {...modalProps}
    >
      {children}
    </AModal>
  )
})
export default RpModal
