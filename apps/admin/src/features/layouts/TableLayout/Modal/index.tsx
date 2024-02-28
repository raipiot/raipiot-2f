import type { ModalProps } from 'antd'

const Modal = memo<ModalProps>((props) => {
  const { t } = useTranslation()

  return (
    <AModal
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
      {...props}
    >
      123
    </AModal>
  )
})
export default Modal
