import type { ModalProps } from 'antd/lib'

interface AModalProps extends ModalProps {}

export default function RpModal(props: AModalProps) {
  return (
    <AModal
      destroyOnClose
      {...props}
    >
      {props.children}
    </AModal>
  )
}
