import type { ModalProps } from 'antd'

const Modal = memo<ModalProps>((props) => {
  const { t } = useTranslation()

  return (
    <AModal
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
      {...props}
    />
  )
})
export default Modal
