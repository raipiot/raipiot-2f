import type { ModalProps } from 'antd'

const Modal = memo<ModalProps>((props) => {
  const { confirmLoading, ...modalProps } = props
  const { t } = useTranslation()

  return (
    <AModal
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
      forceRender // 防止模态框内的表单因为未渲染而没有绑定表单实例
      destroyOnClose
      okButtonProps={{
        loading: confirmLoading,
        disabled: confirmLoading
      }}
      {...modalProps}
    />
  )
})
export default Modal
