import type { ModalProps } from 'antd'

export default function PrivacyPolicy(props: ModalProps) {
  const { t } = useTranslation(['AUTH'])
  return (
    <AModal
      title={t('THE.PRIVACY.POLICY')}
      visible
      footer={null}
      {...props}
    >
      <div>要啥隐私啊</div>
    </AModal>
  )
}
