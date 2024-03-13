import type { ModalProps } from 'antd'

import type { ModalType } from '@/shared/hooks/useModal'

export interface RpModalProps extends ModalProps {
  type?: ModalType
}

const RpModal = memo<RpModalProps>(({ type, ...restProps }) => {
  const modalWidth = useResponsiveModalWidth(type)
  const { width = modalWidth, confirmLoading, children, ...modalProps } = restProps
  const { t } = useTranslation()

  return (
    <AModal
      width={width}
      okText={t('CONFIRM')}
      cancelText={t('CANCEL')}
      forceRender // 防止模态框内的表单因为未渲染而没有绑定表单实例
      destroyOnClose
      cancelButtonProps={{
        disabled: confirmLoading
      }}
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
