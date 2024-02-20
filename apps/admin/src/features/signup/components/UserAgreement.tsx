import type { ModalProps } from 'antd'

export default function UserAgreement(props: ModalProps) {
  const { t } = useTranslation(['AUTH'])

  return (
    <AModal
      title={t('THE.USER.AGREEMENT')}
      visible
      footer={null}
      {...props}
    >
      <div>爱签不签</div>
    </AModal>
  )
}
