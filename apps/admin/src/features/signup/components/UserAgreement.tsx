import type { ModalProps } from 'antd'

export default function UserAgreement(props: ModalProps) {
  return (
    <AModal
      title="用户协议"
      visible
      footer={null}
      {...props}
    >
      <div>爱签不签</div>
    </AModal>
  )
}
