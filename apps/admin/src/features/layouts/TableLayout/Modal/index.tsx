import type { ModalProps } from 'antd'

const Modal = memo<ModalProps>((props) => {
  const { confirmLoading, ...modalProps } = props
  const { t } = useTranslation()

  return (
    <AModal
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
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
