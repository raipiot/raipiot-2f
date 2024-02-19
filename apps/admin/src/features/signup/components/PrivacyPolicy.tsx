import type { ModalProps } from 'antd'

export default function PrivacyPolicy(props: ModalProps) {
  return (
    <AModal
      title="隐私政策"
      visible
      footer={null}
      {...props}
    >
      <div>要啥隐私啊</div>
    </AModal>
  )
}
