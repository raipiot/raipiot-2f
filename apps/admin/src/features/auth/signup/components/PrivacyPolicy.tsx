import type { ModalProps } from 'antd'

export function PrivacyPolicy(props: ModalProps) {
  const { t } = useTranslation(['AUTH'])
  return (
    <AModal
      title={t('THE.PRIVACY.POLICY')}
      footer={null}
      {...props}
    >
      <div>要啥隐私啊</div>
    </AModal>
  )
}
